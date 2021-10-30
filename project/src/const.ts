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
