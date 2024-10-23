import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

const url = "http://localhost:3000";

Given('that I am outside the cafe', async function () {
  await this.driver.get(url);
});

When('I do nothing', async function() {

});

When('I click the {string} button', async function (buttonText) {
  const xpath = `//*[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonText.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  await button.click();
});

Then('I should see an image of the cafe', async function() {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('cloud-forest-cafe.jpg');
});

Then('I should see an image displayed inside the cafe', async function() {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('inside-cafe.jpg');
});

Then('I should see an image of the empty street', async function() {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('street.jpg');
});

Then('I should see an image of a crowded bar', async function() {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('bar.jpg');
});

Then('I should see an image of the country-side', async function() {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('country-side.jpg');
});

Then('I should see an image of a guitarist and saxplayer', async function() {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('music-scene.jpg');
});

Then('I should see a descriptive text explaining the scenario', async function () {
  const textElement = await this.driver.findElement(By.css('p.description'));
  const textContent = await textElement.getText();
  expect(textContent).to.be.a('string').and.not.empty;
});
