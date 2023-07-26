import FavoriteRestaurant from '../../data/favoriterestaurant';
import { createRestaurantTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurants</h2>
        <div id="fav-restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    const restaurantContainer = document.querySelector('#fav-restaurants');
    if (restaurants.length !== 0) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML = '<div class="restaurant-item__not__found">Tidak ada restoran untuk ditampilkan</div>';
    }
  },
};

export default Like;
