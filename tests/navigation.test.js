const { test } = require('node:test');
const assert = require('node:assert');
const { JSDOM } = require('jsdom');
const path = require('path');

// Loads index.html in a simulated browser and runs script.js
async function loadPage() {
  const dom = await JSDOM.fromFile(path.join(__dirname, '../src/index.html'), {
    runScripts: 'dangerously',
    resources: 'usable',
  });
  await new Promise(resolve => dom.window.addEventListener('load', resolve));
  return dom.window.document;
}

const SECTION_IDS = [
  'home-page',
  'data-sources',
  'collection-methods',
  'analysis-methods',
  'publication-venues',
];

function isHidden(doc, id) {
  return doc.getElementById(id).classList.contains('hidden');
}

// Test 1
test('every section has a matching navigation button', async () => {
  const doc = await loadPage();
  for (const id of SECTION_IDS) {
    assert.ok(doc.getElementById(id), `Missing section: ${id}`);
    assert.ok(
      doc.querySelector(`.btn[data-target="${id}"]`),
      `Missing button for section: ${id}`
    );
  }
});

// Test 2
test('only the home section is visible when the page loads', async () => {
  const doc = await loadPage();
  for (const id of SECTION_IDS) {
    if (id === 'home-page') {
      assert.ok(!isHidden(doc, id), 'Home section should be visible');
    } else {
      assert.ok(isHidden(doc, id), `${id} should be hidden on load`);
    }
  }
});

// Test 3
test('clicking each button shows its section and hides all others', async () => {
  const doc = await loadPage();
  for (const target of SECTION_IDS) {
    doc.querySelector(`.btn[data-target="${target}"]`).click();
    for (const id of SECTION_IDS) {
      if (id === target) {
        assert.ok(!isHidden(doc, id), `${id} should be visible after clicking its button`);
      } else {
        assert.ok(isHidden(doc, id), `${id} should be hidden after clicking ${target}`);
      }
    }
  }
});

// Test 4
test('clicking the same button twice keeps its section visible', async () => {
  const doc = await loadPage();
  const button = doc.querySelector('.btn[data-target="data-sources"]');
  button.click();
  button.click();
  assert.ok(!isHidden(doc, 'data-sources'), 'Data Sources should stay visible');
});

// Test 5
test('Data Sources section lists every source from the meeting notes', async () => {
  const doc = await loadPage();
  const text = doc.getElementById('data-sources').textContent.toLowerCase();
  const expected = [
    'GitHub',
    'Stack Overflow',
    'JIRA',
    'App Store',
    'Travis CI',
    'Jenkins',
    'Mailing List',
    'npm',
  ];
  for (const source of expected) {
    assert.ok(text.includes(source.toLowerCase()), `Data Sources is missing: ${source}`);
  }
});
