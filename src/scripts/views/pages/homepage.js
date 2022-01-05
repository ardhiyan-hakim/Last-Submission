/* eslint-disable no-shadow */
import RestaurantSource from '../../data/restaurant-data-source';
import {
  createRestaurantItemTemplate,
  createRestaurantItemHeader,
} from '../templates/template-create';

const HomePage = {
  async render() {
    return `
    <div class="restaurant__list" id="restaurant__list"></div>
     `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();

    const restaurantListHeader = document.querySelector('.main__header');
    const restaurantList = document.querySelector('.restaurant__list');
    // const restaurantData = document.querySelector('.restaurant__detail');

    // restaurantData.innerHTML = '';
    restaurantListHeader.innerHTML = createRestaurantItemHeader;
    restaurants.forEach((restaurants) => {
      restaurantList.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default HomePage;
