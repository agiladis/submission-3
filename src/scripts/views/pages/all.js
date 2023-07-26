import RestaurantsSource from '../../data/restaurants-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const All = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">All Restaurants</h2>
        <div class="progress" id="loading">
          <div class="indeterminate"></div>
        </div>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantsSource.getAllRestaurants();
    const loadingBar = document.querySelector('#loading');
    loadingBar.remove();
    const restaurantsArea = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsArea.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default All;
