export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export const DEFAULT_CITY = 'Paris';

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const DEFAULT_SORT_TYPE = 'Popular';

export const SortTypes = {
  POPULAR: 'Popular',
  PRICE_DOWN: 'Price: low to high',
  PRICE_UP: 'Price: high to low',
  RATING_DOWN: 'Top rated first',
};

export const ratingStars: { [key: string]: string } = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
};

export const MAX_IMAGES = 6;
export const MAX_REVIEWS = 10;

export enum ToastMessage {
  AUTH_PROMT_MESSAGE = 'Do not forget to log in',
  LOGOUT_FAIL_MESSAGE = 'Something went wrong',
  LOGIN_FAIL_MESSAGE = 'Login failed. Please try again',
  FETCH_OFFER_BY_ID_FAIL_MESSAGE = 'Failed to get data. Please try again',
  FETCH_NEARBY_OFFER_FAIL_MESSAGE = 'Failed to get data. Please try again',
  FETCH_COMMENTS_FAIL_MESSAGE = 'Failed to get data. Please try again',
  POST_COMMENT_FAIL_MESSAGE = 'Failed to send message. Please try again',
  FETCH_FAVORITES_FAIL_MESSAGE = 'Failed to get data. Please try again',
  POST_FAVORITE_FAIL_MESSAGE = 'Failed to send data. Please try again',
}
