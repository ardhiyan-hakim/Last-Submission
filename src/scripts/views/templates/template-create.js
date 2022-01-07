import CONFIG from '../../globals/config';

const createRestaurantItemHeader = `
   <h2>WHERE DO YOU WANT TO EAT ?</h2>                
`;

const createRestaurantItemTemplate = (restaurant) => `
   <div class="restaurant__item" aria-label="Button to access ${restaurant.name}">
      <a href="#/detail/${restaurant.id}" style="text-decoration: none;">
         <article>
            <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL}${restaurant.pictureId}" alt="Gambar dari Restoran ${restaurant.name}">
            <div class="article__content">
               <p>${restaurant.name}</p>
               <div class="article__rating__city">
                     <p>${restaurant.rating}&nbsp<span class="material-icons-outlined">star_purple500</span></p>
                     <p>${restaurant.city}</p>
               </div>
            </div>
         </article>
      </a>
   </div>
`;

const createRestaurantDetailHeader = (headerName) => `
   <h2 class="restaurant__title">${headerName}</h2>
`;

const createRestaurantDetailTemplate = (restaurant) => `
   <img class="lazyload restaurant__poster" data-src="${CONFIG.BASE_IMAGE_URL_LARGE}${restaurant.pictureId}" alt="${restaurant.name}" />
   <div class="restaurant__rating__city">
      <div class="restaurant__rating">
         <h4>${restaurant.rating}<span class="material-icons-outlined">star_purple500</span></h4>
      </div>
      <div class="restaurant__city">
         <h4>${restaurant.city}</h4>
      </div>
   </div>
   <div class="restaurant__info">
      <h4>Name</h4>
      <p>${restaurant.name}</p><br>
      <h4>Address</h4>
      <p>${restaurant.address}</p><br>
      <h4>Description</h4>
      <p>${restaurant.description}</p>
   </div>
   <div class="food__beverage__menu">
      <div class="food__menu">
         <h4>Foods</h4>
         <p>${restaurant.menus.foods[0].name}</p>
         <p>${restaurant.menus.foods[1].name}</p>
         <p>${restaurant.menus.foods[2].name}</p>
         <p>${restaurant.menus.foods[3].name}</p>
      </div>
      <div class="beverage__menu">
         <h4>Beverages</h4>
         <p>${restaurant.menus.drinks[0].name}</p>
         <p>${restaurant.menus.drinks[1].name}</p>
         <p>${restaurant.menus.drinks[2].name}</p>
         <p>${restaurant.menus.drinks[3].name}</p>
      </div>
   </div>
   <div class="review__menu">
      <h4>Reviews</h4>
      <div class="review__content">
         <h5>${restaurant.customerReviews[0].review}</h5>
         <p>—${restaurant.customerReviews[0].name}, ${restaurant.customerReviews[0].date}</p>
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

const createLikedRestaurantHeader = () => `
   <h2>YOUR FAVORITE RESTAURANT</h2>
`;

export {
  createRestaurantDetailHeader,
  createRestaurantItemHeader,
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createLikedRestaurantHeader,
};
