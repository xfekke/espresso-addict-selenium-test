import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that I am outside the bar', async function () {
  await this.driver.get('http://localhost:3000');
  const buttonXpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "go north")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(buttonXpath)), 5000);
  await button.click();
});

Given('I have clicked the {string} button', async function (buttonText) {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonText.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  await button.click();
});

Then('I should see helpful text', async function () {
  const helpTextElement = await this.driver.findElement(By.css('.help-text'));
  const isDisplayed = await helpTextElement.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('I should be outside of the cafe', async function () {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('cafe.jpg'); 
});

Then('I should be inside the bar', async function () {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('bar.jpg'); 
});
