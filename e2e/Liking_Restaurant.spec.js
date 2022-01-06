/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const assert = require('assert');

Feature('Liking and Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});
Scenario('Liking a restaurant', async ({ I }) => {
  I.dontSeeElement('.restaurant__item a');

  I.amOnPage('/');
  I.seeElement('.restaurant__item a');

  I.waitForElement(locate('.restaurant__item a article').first());
  I.scrollPageToBottom();
  I.seeElement(locate('.restaurant__item a article').first());
  I.click(locate('.restaurant__item a').first());

  I.scrollPageToBottom();
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant__item a');
});

Scenario('Unliking a restaurant', async ({ I }) => {
  I.dontSeeElement('.restaurant__item a');

  I.amOnPage('/');
  I.seeElement('.restaurant__item a');

  I.waitForElement(locate('.restaurant__item a article').first());
  I.scrollPageToBottom();
  I.seeElement(locate('.restaurant__item a article').first());
  I.click(locate('.restaurant__item a').first());

  I.scrollPageToBottom();
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant__item a');
  I.waitForElement(locate('.restaurant__item a article').first());
  I.seeElement(locate('.restaurant__item a article').first());

  I.click(locate('.restaurant__item a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
});
// Scenario('Liking a restaurant', async ({ I }) => {
//   I.dontSeeElement('.restaurant__item a');

//   I.amOnPage('/');
//   I.seeElement('.restaurant__item a');

//   I.waitForElement(locate('.restaurant__item a article').first());
//   I.seeElement(locate('.restaurant__item a article').first());

//   const firstResto = locate('.restaurant__item a article .article__content p').first();
//   const firstRestoTitle = await I.grabTextFrom(firstResto);
//   I.click(locate('.restaurant__item a').first());

//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   I.amOnPage('/#/like');
//   I.seeElement('.restaurant__item a');
//   I.waitForElement(locate('.restaurant__item a article').first());
//   I.seeElement(locate('.restaurant__item a article').first());
//   const likedRestoTitle = await I.grabTextFrom('.restaurant__item a article .article__content p').first();

//   I.click(locate('.restaurant__item a').first());

//   // I.seeElement('#likeButton');
//   // I.click('#likeButton');
//   assert.strictEqual(firstRestoTitle, likedRestoTitle);
// });

// // Scenario('Unliking a restaurant', ({ I }) => {
// //   I.dontSeeElement('.restaurant__item a');

// //   I.amOnPage('/');
// //   I.seeElement('.restaurant__item a');
// //   I.scrollTo('.main__content');

// //   I.waitForElement(locate('.restaurant__item a article').first());
// //   I.seeElement(locate('.restaurant__item a article').first());
// //   I.click(locate('.restaurant__item a article').first());

// //   I.seeElement('#likeButton');

// //   I.click('#likeButton');

// //   I.amOnPage('/#/like');
// //   I.seeElement('.restaurant__item a');
// //   I.waitForElement(locate('.restaurant__item a article').first());
// //   I.seeElement(locate('.restaurant__item a article').first());

// //   I.click(locate('.restaurant__item a').first());
// //   I.waitForElement('#likeButton');
// //   I.seeElement('#likeButton');

// //   I.click('#likeButton');

// //   I.amOnPage('/#/like');
// //   I.dontSeeElement('.restaurant__item a');
// // });
