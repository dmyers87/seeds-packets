const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-package:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      packageName: 'button',
      packageDescription: 'How to make a button, Sprout-style.',
      tokenName: 'size default',
      tokenCategory: 'size',
      tokenValue: 'default'
    });
  });

  it('creates a package.json file', () => {
    assert.file(['packages/seeds-button/package.json']);
  });
});
