import { Given, Then } from '@cucumber/cucumber';
import { By } from 'selenium-webdriver';
import { expect } from 'chai';

Given('I have noted the initial resource values', async function () {
  // Saves the initial values of the progressbars
  const healthSelector = 'section.health span.val';
  const healthElement = await this.driver.findElement(By.css(healthSelector));
  const healthText = await healthElement.getText();
  this.initialHealth = parseInt(healthText);

  const moneySelector = 'section.money span.val';
  const moneyElement = await this.driver.findElement(By.css(moneySelector));
  const moneyText = await moneyElement.getText();
  this.initialMoney = parseInt(moneyText);

  const espressoSelector = 'section.espressocups span.val';
  const espressoElement = await this.driver.findElement(By.css(espressoSelector));
  const espressoText = await espressoElement.getText();
  this.initialEspressos = parseInt(espressoText);
});

Then('I should see "Health", "Money" and "Espressos"', async function () {
  const sections = ['health', 'money', 'espressocups'];
  for (const sectionClass of sections) {
    const selector = `section.${sectionClass}`;
    const element = await this.driver.findElement(By.css(selector));
    const isDisplayed = await element.isDisplayed();
    expect(isDisplayed).to.be.true;
  }
});

Then('I should have lost "Health"', async function () {
  const healthSelector = 'section.health span.val';
  const healthElement = await this.driver.findElement(By.css(healthSelector));
  const healthText = await healthElement.getText();
  const currentHealth = parseInt(healthText);
  expect(currentHealth).to.be.lessThan(this.initialHealth);
});

Then('I should have gained "Espressos"', async function () {
  const espressoSelector = 'section.espressocups span.val';
  const espressoElement = await this.driver.findElement(By.css(espressoSelector));
  const espressoText = await espressoElement.getText();
  const currentEspressos = parseInt(espressoText);
  expect(currentEspressos).to.be.greaterThan(this.initialEspressos);
});

Then('I should have gained "Health"', async function () {
  const healthSelector = 'section.health span.val';
  const healthElement = await this.driver.findElement(By.css(healthSelector));
  const healthText = await healthElement.getText();
  const currentHealth = parseInt(healthText);
  expect(currentHealth).to.be.greaterThan(this.initialHealth);
});

Then('I should have lost "Money"', async function () {
  const moneySelector = 'section.money span.val';
  const moneyElement = await this.driver.findElement(By.css(moneySelector));
  const moneyText = await moneyElement.getText();
  const currentMoney = parseInt(moneyText);
  expect(currentMoney).to.be.lessThan(this.initialMoney);
});
