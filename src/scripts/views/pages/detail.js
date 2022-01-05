import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-data-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantDetailHeader,
} from '../templates/template-create';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="restaurant__detail" id="restaurant__detail"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurants(url.id);

    const restaurantHeader = document.querySelector('.main__header');
    const restaurantData = document.querySelector('.restaurant__detail');

    restaurantHeader.innerHTML = createRestaurantDetailHeader('DETAIL RESTAURANT');
    restaurantData.innerHTML = createRestaurantDetailTemplate(restaurant);
    if (window.innerWidth < 460) {
      window.scrollTo(0, 360);
    } else {
      window.scrollTo(0, 760);
    }

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;
