import { Given, When, Then } from '@cucumber/cucumber';
import { By } from 'selenium-webdriver';
import { expect } from 'chai';

const url = "http://localhost:3000";

Given('that I am outside the cafe', async function () {
  await this.driver.get(url);
});

When('I do nothing', async function() {
  // :)
});

Then('I should see an image of the cafe', async function() {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('cloud-forest-cafe.jpg');
});

Then('I should see a descriptive text explaining the scenario', async function () {
  const textElement = await this.driver.findElement(By.css('p.description'));
  const textContent = await textElement.getText();
  expect(textContent).to.contain('You are standing outside the Cloud Forest Cafe. The sun is shining.');
});