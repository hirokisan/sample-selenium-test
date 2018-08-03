const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');

let driver;

describe('sample test', function () {

  // テスト実行前にdriverの起動と作成
  before(function() {
    driver = new Builder()
      .usingServer('http://selenium:4444/wd/hub')
      .forBrowser('chrome')
      .build();
  });

  after(function () {
    driver.quit()
  });

  it('Check URL', async () => {
    await driver.get('https://github.com/SeleniumHQ/selenium');
    const url = await driver.getCurrentUrl();
    assert.equal(url, 'https://qiita.com/nazomikan/items/40b86dc5619bb1795aaa');
  })

  it('Check URL', async () => {
    await driver.get('https://github.com/SeleniumHQ/selenium');
    const url = await driver.getCurrentUrl();
    assert.equal(url, 'https://github.com/SeleniumHQ/selenium');
  })

});
