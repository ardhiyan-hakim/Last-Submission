/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

Feature('Liking and Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('Liking a restaurant', ({ I }) => {
  I.dontSeeElement('.restaurant__item a');

  I.amOnPage('/');
  I.seeElement('.restaurant__item a');
  I.scrollTo('.main__content');

  I.wait(2);
  I.waitForElement(locate('.restaurant__item a article').first());
  I.seeElement(locate('.restaurant__item a article').first());
  I.click(locate('.restaurant__item a article').first());
  I.wait(2);

  I.seeElement('#likeButton');
  I.wait(1);
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.wait(2);
  I.seeElement('.restaurant__item a');
  I.wait(2);
  I.waitForElement(locate('.restaurant__item a article').first());
  I.seeElement(locate('.restaurant__item a article').first());

  I.click(locate('.restaurant__item a article').first());
  I.seeElement('#likeButton');

  I.wait(2);
  I.click('#likeButton');
});

Scenario('Unliking a restaurant', ({ I }) => {
  I.dontSeeElement('.restaurant__item a');

  I.amOnPage('/');
  I.seeElement('.restaurant__item a');
  I.scrollTo('.main__content');

  I.wait(2);
  I.waitForElement(locate('.restaurant__item a article').first());
  I.seeElement(locate('.restaurant__item a article').first());
  I.click(locate('.restaurant__item a article').first());
  I.wait(2);

  I.seeElement('#likeButton');
  I.wait(2);
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.wait(2);
  I.seeElement('.restaurant__item a');
  I.wait(2);
  I.waitForElement(locate('.restaurant__item a article').first());
  I.seeElement(locate('.restaurant__item a article').first());

  I.click(locate('.restaurant__item a article').first());
  I.seeElement('#likeButton');

  I.wait(2);
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.restaurant__item a');
});
