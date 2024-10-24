import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

Given('I am in the Bar', async function () {
  await this.driver.get('http://localhost:3000');
  await this.driver.wait(until.elementLocated(By.xpath('//li')), 5000);
  await this.driver
    .findElement(
      By.xpath(
        '//li[contains(translate(normalize-space(text()), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "go north")]'
      )
    )
    .click();
  await this.driver
    .findElement(
      By.xpath(
        '//li[contains(translate(normalize-space(text()), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "go east")]'
      )
    )
    .click();
});

Given('I am at the Guitarist and Saxplayer scene', async function () {
  await this.driver.get('http://localhost:3000');
  await this.driver.wait(until.elementLocated(By.xpath('//li')), 5000);
  await this.driver
    .findElement(
      By.xpath(
        `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "go south")]`
      )
    )
    .click();
  await this.driver
    .findElement(
      By.xpath(
        `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "go west")]`
      )
    )
    .click();
});

Given('I have noted the initial {string} value', async function (resourceName) {
  const selector = getResourceSelector(resourceName);
  await this.driver.wait(until.elementLocated(By.css(selector)), 5000);
  const element = await this.driver.findElement(By.css(selector));
  const text = await element.getText();
  const numericValue = parseInt(text.replace(/\D/g, ''), 10);
  this[`initial${resourceName}`] = numericValue;
});

When('I wait until I have {string} in my {string}', async function (itemName, containerName) {
  const waitButtonXpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "wait")]`;
  const containerSelectorMap = {
    bag: '.bag-content',
  };
  const containerSelector = containerSelectorMap[containerName.toLowerCase()];

  let attempts = 0;
  const maxAttempts = 30;

  while (attempts < maxAttempts) {
    attempts++;
    const containerElement = await this.driver.findElement(By.css(containerSelector));
    const containerText = await containerElement.getText();
    if (containerText.toLowerCase().includes(itemName.toLowerCase())) {
      return;
    }
    const waitButton = await this.driver.findElement(By.xpath(waitButtonXpath));
    await waitButton.click();
    await this.driver.sleep(1000);
  }
});

When('I wait until I can click the {string} button', async function (targetButtonText) {
  const waitButtonXpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "wait")]`;
  const targetButtonXpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${targetButtonText.toLowerCase()}")]`;

  let attempts = 0;
  const maxAttempts = 30;

  while (attempts < maxAttempts) {
    attempts++;
    const targetButtons = await this.driver.findElements(By.xpath(targetButtonXpath));
    if (targetButtons.length > 0) {
      await targetButtons[0].click();
      return;
    }
    const waitButtons = await this.driver.findElements(By.xpath(waitButtonXpath));
    if (waitButtons.length === 0) {
      return;
    }
    await waitButtons[0].click();
    await this.driver.sleep(1000);
  }
});

Then('I should have {string} in my {string}', async function (itemName, containerName) {
  const containerSelectorMap = {
    bag: '.bag-content',
  };
  const containerSelector = containerSelectorMap[containerName.toLowerCase()];
  await this.driver.wait(until.elementLocated(By.css(containerSelector)), 5000);
  const containerElement = await this.driver.findElement(By.css(containerSelector));
  const containerText = await containerElement.getText();
  expect(containerText.toLowerCase()).to.include(itemName.toLowerCase());
});

Then('I should have received {int} {string}', async function (amount, resourceName) {
  const selector = getResourceSelector(resourceName);
  const initialValue = this[`initial${resourceName}`];
  await this.driver.wait(async () => {
    const element = await this.driver.findElement(By.css(selector));
    const text = await element.getText();
    const currentValue = parseInt(text.replace(/\D/g, ''), 10);
    return currentValue - initialValue === amount;
  }, 5000);
  const element = await this.driver.findElement(By.css(selector));
  const text = await element.getText();
  const currentValue = parseInt(text.replace(/\D/g, ''), 10);
  expect(currentValue - initialValue).to.equal(amount);
});

function getResourceSelector(resourceName) {
  const resourceMap = {
    Health: 'health',
    Money: 'money',
    Espressos: 'espressocups',
  };
  const resourceClass =
    resourceMap[resourceName] || resourceName.toLowerCase().replace(/[^a-z]/g, '');
  return `section.${resourceClass} span.val`;
}
