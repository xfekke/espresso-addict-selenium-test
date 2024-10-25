import { When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';


async function clickButton(driver, buttonText) {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonText.toLowerCase()}")]`;
  const button = await driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  await button.click();
}

function getResourceSelector(resourceName) {
  const resources = {
    Health: 'health',
    Money: 'money',
    Espressos: 'espressocups',
  };
  const resourceClass =
    resources[resourceName] || resourceName.toLowerCase().replace(/[^a-z]/g, '');
  return `section.${resourceClass} span.val`;
}


// defined in commonSteps
// Given that I am outside the cafe
// When I click the "Go South" button
// And I click the "Go West" button

// defined in waitResource
// And I wait until I can click the "Jam with the band" button

// defined in commonSteps
// And I click the "Go East" button
// And I click the "Go North" button
// And I click the "Go North" button
// And I click the "Go East" button

// defined in waitResource
// And I wait until I have "a can of beer" in my "bag"

// defined in commonSteps
// And I click the "Go West" button
// And I click the "Go South" button
// And I click the "Enter the cafe" button

When('I click the {string} button {int} times', async function (buttonText, times) {
  for (let i = 0; i < times; i++) {
    await clickButton(this.driver, buttonText);
    await this.driver.sleep(500); 
  }
});

// defined in waitResource
// And I wait until I can click the "Give beer to barista" button

Then('I should have {int} {string}', async function (amount, resourceName) {
  const selector = getResourceSelector(resourceName);
  const element = await this.driver.findElement(By.css(selector));
  const text = await element.getText();
  const currentValue = parseInt(text.replace(/\D/g, ''), 10);
  expect(currentValue).to.equal(amount);
});

// defined in loseGame.js
// And I should see the "Play again" button


