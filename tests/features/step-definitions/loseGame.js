import { When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver'; 
import { expect } from 'chai';

When('I click the {string} button until I lose all {string}', async function (buttonText, resourceName) {
  const buttonXpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonText.toLowerCase()}")]`;

  let resourceSelector;
  switch (resourceName.toLowerCase()) {
    case 'health':
      resourceSelector = 'section.health span.val';
      break;
    default:
      throw new Error(`Unknown resource: ${resourceName}`);
  }

  while (true) {
    try {
      const button = await this.driver.findElement(By.xpath(buttonXpath));
      await button.click();

      await this.driver.sleep(500);

      const resourceElement = await this.driver.findElement(By.css(resourceSelector));
      const resourceText = await resourceElement.getText();
      const resourceValue = parseInt(resourceText.replace(/[^0-9-]/g, ''), 10);

      // Checks if value is 0 
      if (resourceValue <= 0) {
        break;
      }
    } catch (err) {
      // Stop loop if value is 0
      break;
    }
  }
});

Then('I should see the {string} button', async function (buttonText) {
  const buttonXpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonText.toLowerCase()}")]`;

  const button = await this.driver.wait(until.elementLocated(By.xpath(buttonXpath)), 5000);
  const isDisplayed = await button.isDisplayed();
  expect(isDisplayed).to.be.true;
});
