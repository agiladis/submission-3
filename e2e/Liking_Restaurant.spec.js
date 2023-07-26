const assert = require('assert');

Feature('Liking Restaurants');
 
Before(({ I }) => {
  I.amOnPage('/#/like');
});
 
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#content');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
 
  I.amOnPage('/');
  I.seeElement('.restaurant-item__content h3 a');
  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('.like');
  I.click('.like');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content h3 a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  //unliking
  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item__content h3 a');
  I.click(firstRestaurant);

  I.seeElement('.like');
  I.click('.like');

  I.amOnPage('/#/like');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});