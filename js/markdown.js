// Sous-ensemble documentaire : tout texte est échappé avant mise en forme.
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function inline(text) {
  return escape(text)
    .replace(/`([^`\n]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
}
const cells = line => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(s => s.trim());
const tableRule = line => /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line || '');
const special = line => /^(?:```|#{1,6}\s|>\s?|[-*]\s|\d+\.\s)/.test(line);

export function renderMarkdown(value) {
  const lines = String(value).replace(/\r/g, '').split('\n');
  const blocks = [];
  for (let i = 0; i < lines.length;) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith('```')) {
      const code = []; i++;
      while (i < lines.length && !lines[i].startsWith('```')) code.push(lines[i++]);
      if (i < lines.length) i++;
      blocks.push('<pre><code>' + escape(code.join('\n')) + '</code></pre>');
      continue;
    }
    if (/^#{1,6}\s/.test(line)) {
      const match = line.match(/^(#{1,6})\s+(.*)$/);
      const tag = match[1].length > 3 ? 'h4' : 'h3';
      blocks.push(`<${tag}>${inline(match[2])}</${tag}>`); i++; continue;
    }
    if (line.includes('|') && tableRule(lines[i + 1])) {
      const headers = cells(line); i += 2;
      const rows = [];
      while (i < lines.length && lines[i].trim() && lines[i].includes('|')) rows.push(cells(lines[i++]));
      blocks.push('<p class="table-hint">Faites défiler le tableau horizontalement pour consulter toutes les colonnes.</p><div class="table-scroll" role="region" tabindex="0" aria-label="Tableau comparatif"><table><thead><tr>' + headers.map(h => '<th scope="col">' + inline(h) + '</th>').join('') + '</tr></thead><tbody>' + rows.map(row => '<tr>' + headers.map((_, j) => '<td>' + inline(row[j] || '') + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>');
      continue;
    }
    if (/^>\s?/.test(line)) {
      const quote = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) quote.push(lines[i++].replace(/^>\s?/, ''));
      blocks.push('<blockquote>' + quote.map(inline).join('<br>') + '</blockquote>'); continue;
    }
    if (/^(?:[-*]|\d+\.)\s/.test(line)) {
      const ordered = /^\d+\./.test(line), tag = ordered ? 'ol' : 'ul', items = [];
      const pattern = ordered ? /^\d+\.\s/ : /^[-*]\s/;
      while (i < lines.length && pattern.test(lines[i])) items.push(lines[i++].replace(pattern, ''));
      blocks.push(`<${tag}>` + items.map(item => '<li>' + inline(item) + '</li>').join('') + `</${tag}>`); continue;
    }
    const paragraph = [line]; i++;
    while (i < lines.length && lines[i].trim() && !special(lines[i]) && !(lines[i].includes('|') && tableRule(lines[i + 1]))) paragraph.push(lines[i++]);
    blocks.push('<p>' + paragraph.map(inline).join('<br>') + '</p>');
  }
  return blocks.join('');
}
