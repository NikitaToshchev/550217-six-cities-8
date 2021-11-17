import { Offer } from '../../types/offer';
import FavoritesItem from '../favorites-item/favorites-item';

type FavoriteListProps = {
  favoritesOffers: Offer[],
  cities: string[],
}

function FavoriteList({ cities, favoritesOffers }: FavoriteListProps): JSX.Element {

  return (
    <ul className="favorites__list">
      {cities.map((city) => <FavoritesItem city={city} favoritesOffers={favoritesOffers} key={city} />)}
    </ul>
  );
}

export default FavoriteList;
