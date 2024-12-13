import { Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

Then('I should see an image of the cafe', async function () {
  const imageSelector = By.css('img.big-image');
  await this.driver.wait(until.elementLocated(imageSelector), 10000);
  const imageElement = await this.driver.findElement(imageSelector);
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('cloud-forest-cafe.jpg');
});

Then('I should see an image displayed inside the cafe', async function () {
  const imageSelector = By.css('img.big-image');
  await this.driver.wait(until.elementLocated(imageSelector), 10000);
  const imageElement = await this.driver.findElement(imageSelector);
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('inside-cafe.jpg');
});

Then('I should see an image of the empty street', async function () {
  const imageSelector = By.css('img.big-image');
  await this.driver.wait(until.elementLocated(imageSelector), 10000);
  const imageElement = await this.driver.findElement(imageSelector);
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('street.jpg');
});

Then('I should see an image of a crowded bar', async function () {
  const imageSelector = By.css('img.big-image');
  await this.driver.wait(until.elementLocated(imageSelector), 10000);
  const imageElement = await this.driver.findElement(imageSelector);
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('bar.jpg');
});

Then('I should see an image of the country-side', async function () {
  const imageSelector = By.css('img.big-image');
  await this.driver.wait(until.elementLocated(imageSelector), 10000);
  const imageElement = await this.driver.findElement(imageSelector);
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('country-side.jpg');
});

Then('I should see an image of a guitarist and saxplayer', async function () {
  const imageSelector = By.css('img.big-image');
  await this.driver.wait(until.elementLocated(imageSelector), 10000);
  const imageElement = await this.driver.findElement(imageSelector);
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('music-scene.jpg');
});

Then('I should see a descriptive text explaining the scenario', async function () {
  const textSelector = By.css('p.description');
  await this.driver.wait(until.elementLocated(textSelector), 10000);
  const textElement = await this.driver.findElement(textSelector);
  const textContent = await textElement.getText();
  expect(textContent).to.be.a('string').and.not.empty;
});



