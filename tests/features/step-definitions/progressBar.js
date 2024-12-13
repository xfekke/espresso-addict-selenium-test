import { Given, Then } from '@cucumber/cucumber';
import { By } from 'selenium-webdriver';
import { expect } from 'chai';

function getResourceSelector(resourceName) {
  const resourceMap = {
    'Health': 'health',
    'Money': 'money',
    'Espressos': 'espressocups',
  };

  const resourceClass = resourceMap[resourceName] || resourceName.toLowerCase().replace(/[^a-z]/g, '');
  return `section.${resourceClass} span.val`;
}

Given('I have noted the initial resource values', async function () {
  // Saves value of game-resources to use later
  const resources = ['Health', 'Money', 'Espressos'];
  for (const resource of resources) {
    const selector = getResourceSelector(resource);
    const element = await this.driver.findElement(By.css(selector));
    const text = await element.getText();
    const numericValue = parseInt(text.replace(/[^0-9-]/g, ''), 10);
    this[`initial${resource}`] = numericValue;
  }
});

Then('I should see {string}, {string} and {string}', async function (resource1, resource2, resource3) {
  const resources = [resource1, resource2, resource3];
  for (const resource of resources) {
    const resourceMap = {
      'Health': 'health',
      'Money': 'money',
      'Espressos': 'espressocups',
    };

    const sectionClass = resourceMap[resource] || resource.toLowerCase().replace(/[^a-z]/g, '');
    const selector = `section.${sectionClass}`;
    const element = await this.driver.findElement(By.css(selector));
    const isDisplayed = await element.isDisplayed();
    expect(isDisplayed).to.be.true;
  }
});

Then('I should have lost {string}', async function (resourceName) {
  const selector = getResourceSelector(resourceName);
  const element = await this.driver.findElement(By.css(selector));
  const text = await element.getText();
  const currentValue = parseInt(text.replace(/[^0-9-]/g, ''), 10);
  const initialValue = this[`initial${resourceName}`];
  expect(currentValue).to.be.lessThan(initialValue);
});

Then('I should have gained {string}', async function (resourceName) {
  const selector = getResourceSelector(resourceName);
  const element = await this.driver.findElement(By.css(selector));
  const text = await element.getText();
  const currentValue = parseInt(text.replace(/[^0-9-]/g, ''), 10);
  const initialValue = this[`initial${resourceName}`];
  expect(currentValue).to.be.greaterThan(initialValue);
});

Then('I should have the same {string} as before', async function (resourceName) {
  const selector = getResourceSelector(resourceName);
  const element = await this.driver.findElement(By.css(selector));
  const text = await element.getText();
  const currentValue = parseInt(text.replace(/[^0-9-]/g, ''), 10);
  const initialValue = +(this[`initial${resourceName}`]);
  expect(currentValue).to.equal(initialValue);
});
