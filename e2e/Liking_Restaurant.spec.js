/* eslint-disable no-undef */

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
