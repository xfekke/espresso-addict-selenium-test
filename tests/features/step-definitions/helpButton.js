import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that I am inside the bar', async function () {
  await this.driver.get('http://localhost:3000');

  let buttonXpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "go north")]`;
  let button = await this.driver.wait(until.elementLocated(By.xpath(buttonXpath)), 5000);
  await button.click();

  await this.driver.wait(until.elementLocated(By.css('img.big-image')), 5000);

  buttonXpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "go east")]`;
  button = await this.driver.wait(until.elementLocated(By.xpath(buttonXpath)), 5000);
  await button.click();
});


Given('I have clicked the {string} button', async function (buttonText) {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonText.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  await button.click();
});

Then('I should see helpful text', async function () {
  const helpTextElement = await this.driver.findElement(By.css('p.description'));
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