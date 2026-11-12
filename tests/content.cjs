const fs = require('fs');
const path = require('path');
const assert = require('assert/strict');
const root = path.resolve(__dirname, '..');
const wordCount = sections => Object.values(sections).flat().join(' ').split(/\s+/).filter(Boolean).length;

(async () => {
  const {validate, renderFiche} = await import('../js/core.js');
  const {renderMarkdown} = await import('../js/markdown.js');
  const read = name => JSON.parse(fs.readFileSync(path.join(root, 'data', name + '.json'), 'utf8'));
  const data = {corpus: read('fiches'), categories: read('categories'), config: read('config')};
  assert.equal(data.corpus.fiches.length, 30);
  assert.equal(data.categories.length, 8);
  assert.equal(new Set(data.corpus.fiches.map(f => f.id)).size, 30);
  for (const f of data.corpus.fiches) {
    const result = validate(f, data);
    assert.deepEqual(result.errors, [], f.id);
    assert.deepEqual(result.warnings, [], f.id);
    assert.equal(f.published, true);
    assert.equal(f.lastChecked, '2026-11-12');
    assert.ok(f.related.length >= 2 && f.related.length <= 5, f.id);
    assert.ok(wordCount(f.sections) >= 450, 'Fiche insuffisamment développée : ' + f.id);
    assert.ok(f.sections.en2Minutes.split(/\s+/).length <= 380, 'Conserver une entrée courte : ' + f.id);
    for (const key of ['exempleConcret', 'voirComment', 'attention', 'approfondir', 'voirConcretement', 'pourAllerPlusLoin']) {
      assert.ok(f.sections[key]?.length > 50, 'Section manquante : ' + f.id + ' / ' + key);
    }
    assert.ok(f.sections.schema || f.sections.exempleConcret.includes('```'), 'Schéma absent : ' + f.id);
    assert.equal(f.sections.voirConcretement.includes('lorsque la fiche s’y prête'), false);
    assert.ok(f.levels.includes(f.level));
    assert.equal(f.readingTime, Math.max(3, Math.ceil(wordCount(f.sections) / 200)));
    assert.equal((renderFiche(f, data).match(/<h1>/g) || []).length, 1);
  }
  if (process.argv[2]) {
    const original = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
    for (const before of original.fiches) {
      const after = data.corpus.fiches.find(f => f.id === before.id);
      for (const key of ['id', 'number', 'title', 'category', 'level', 'lastChecked', 'firstPublished', 'published']) {
        assert.deepEqual(after[key], before[key], before.id + ' / ' + key);
      }
      assert.ok(wordCount(after.sections) > wordCount(before.sections) * 2, before.id);
      assert.ok(before.related.every(id => after.related.includes(id)), 'Relation éditoriale perdue : ' + before.id);
    }
  }
  const bad = structuredClone(data.corpus.fiches[0]);
  bad.sections.aRetenir = ['1', '2', '3', '4'];
  bad.sources[0].url = 'javascript:alert(1)';
  assert.ok(validate(bad, data).errors.length >= 2);
  bad.sections.en2Minutes += ' Alma';
  assert.equal(validate(bad, data).warnings.length, 1);
  assert.ok(renderMarkdown('<script>alert(1)</script>').includes('&lt;script&gt;'));
  assert.ok(renderMarkdown('### Sous-titre\n\n**Texte**').includes('<h3>Sous-titre</h3><p><strong>Texte</strong></p>'));
  assert.ok(renderMarkdown('| A | B |\n|---|---|\n| 1 | 2 |').includes('<th scope="col">A</th>'));
  assert.ok(renderMarkdown('```text\n<a>\n```').includes('&lt;a&gt;'));
  console.log('PASS — 30 fiches étoffées, sections complètes, entrée courte, durées, sources, relations, neutralité et rendu sûr.');
})().catch(error => { console.error(error); process.exitCode = 1; });
