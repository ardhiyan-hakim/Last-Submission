import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  createRestaurantItemTemplate,
  createLikedRestaurantHeader,
} from '../templates/template-create';

const Like = {
  async render() {
    return `
    <div class="restaurant__list" id="restaurant__list"></div>
    `;
  },

  async afterRender() {
    const restaurantListHeader = document.querySelector('.main__header');
    const restaurantList = document.querySelector('.restaurant__list');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    restaurantListHeader.innerHTML = createLikedRestaurantHeader();
    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    if (window.innerWidth < 460) {
      window.scrollTo(0, 360);
    } else {
      window.scrollTo(0, 760);
    }
  },
};

export default Like;
