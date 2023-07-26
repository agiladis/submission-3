import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant, container) => {
  container.innerHTML = `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
  <br/>
  <div class="restaurant__info">
    <h4>Description</h4>
    <p align="justify">${restaurant.description}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Foods</h4>
    </div>
  `;
  let listfood = '';
  let i = 0;
  restaurant.menus.foods.forEach((food) => {
    i += 1;
    listfood += food.name;
    if (restaurant.menus.foods.length > i) {
      listfood += ', ';
    }
  });

  container.innerHTML += `<br/><div style="margin-top: -20px">${listfood}</div>`;
  container.innerHTML += '<br/><h4 style="margin-top: -10px">Drinks</h4>';
  let listdrink = '';
  i = 0;
  restaurant.menus.drinks.forEach((drink) => {
    i += 1;
    listdrink += drink.name;
    if (restaurant.menus.drinks.length > i) {
      listdrink += ', ';
    }
  });

  container.innerHTML += `<br/><div style="margin-top: -20px">${listdrink}</div>`;
  container.innerHTML += '<br/><h4 style="margin-top: -20px">Reviews</h4>';
  let listreview = '';
  i = 0;
  restaurant.customerReviews.forEach((review) => {
    i += 1;
    listreview += `<p>${review.review}, <b>- ${review.name}</b></p>`;
    if (restaurant.customerReviews > i) {
      listreview += '';
    }
  });

  container.innerHTML += `<br/><div style="margin-top: -20px">${listreview}</div>`;
};

const createRestaurantTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
            data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
