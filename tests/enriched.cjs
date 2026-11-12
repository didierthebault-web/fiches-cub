const {chromium} = require(process.env.CUB_PLAYWRIGHT || 'C:/Users/didie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('assert/strict');
const path = require('path');
const base = process.env.CUB_BASE || 'http://127.0.0.1:8793/';

(async () => {
  const browser = await chromium.launch({headless: true, args: ['--no-proxy-server']});
  try {
    const page = await browser.newPage({viewport: {width: 1440, height: 1000}});
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base);
    const corpus = await (await page.request.get(base + 'data/fiches.json')).json();
    assert.equal(corpus.version, '1.1');
    for (const f of corpus.fiches) {
      await page.goto(base + '#/fiche/' + f.id);
      await page.locator('.article-body').waitFor();
      assert.ok((await page.locator('.article-body').innerText()).split(/\s+/).length > 450, f.id);
      assert.equal(await page.locator('.voirComment').count(), 1);
      assert.equal(await page.locator('.approfondir').count(), 1);
      assert.equal(await page.locator('h1').count(), 1);
      assert.ok(await page.locator('.article-body pre').count() >= 1, f.id);
      await page.locator('.fiche-toc summary').click();
      const stable = page.url();
      await page.locator('.fiche-toc [data-section="approfondir"]').click();
      assert.equal(page.url(), stable, 'Le sommaire ne doit pas casser la route');
      assert.equal(await page.evaluate(() => document.activeElement.id), 'section-approfondir');
    }
    await page.goto(base + '#/fiche/identifiants-isbn-issn-ark-isni-viaf');
    await page.locator('.article-body table').waitFor();
    assert.equal(await page.locator('.article-body table tbody tr').count(), 5);
    assert.equal(await page.locator('.article-body table th').count(), 3);
    await page.locator('#section-voirComment').screenshot({path: path.join(__dirname, 'identifiers-table-desktop.png')});
    await page.emulateMedia({media: 'print'});
    assert.equal(await page.locator('.fiche-toc').isVisible(), false);
    assert.equal(await page.locator('.sources').isVisible(), true);
    await page.locator('.article-body').screenshot({path: path.join(__dirname, 'identifiers-print.png')});
    await page.emulateMedia({media: 'screen'});
    await page.setViewportSize({width: 390, height: 844});
    for (const f of corpus.fiches) {
      await page.goto(base + '#/fiche/' + f.id);
      await page.locator('.article-body').waitFor();
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Débordement mobile : ' + f.id);
    }
    await page.goto(base + '#/fiche/identifiants-isbn-issn-ark-isni-viaf');
    await page.locator('.article-body table').waitFor();
    await page.locator('#section-voirComment').screenshot({path: path.join(__dirname, 'identifiers-table-mobile.png')});
    await page.goto(base + 'admin.html');
    await page.locator('#rows').waitFor();
    await page.locator('#rows tr').first().getByRole('button', {name: /Modifier/}).click();
    assert.ok((await page.locator('#voirComment').inputValue()).length > 50);
    assert.ok((await page.locator('#approfondir').inputValue()).length > 100);
    await page.evaluate(value => {
      const local = structuredClone(value);
      local.version = '1.0';
      local.fiches[0].title += ' — modification locale';
      localStorage.setItem('cub-editorial-v1', JSON.stringify(local));
    }, corpus);
    await page.reload();
    await page.getByText('Une nouvelle version du corpus public est disponible.', {exact: true}).waitFor();
    assert.ok((await page.locator('#rows tr').first().innerText()).includes('modification locale'));
    assert.deepEqual(errors, []);
    console.log('PASS — 30 fiches enrichies, sections, schémas, sommaires stables, tableau desktop/mobile, impression et édition. ' + base);
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
