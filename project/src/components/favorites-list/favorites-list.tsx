import { Offers } from '../../types/offers';
import FavoritesItem from '../favorites-item/favorites-item';
type FavorItemListProps = {
  offers: Offers,
  cities: string[],
}

function FavoriteListComponent({ cities, offers }: FavorItemListProps): JSX.Element {

  return (
    <ul className="favorites__list">
      {cities.map((city) => <FavoritesItem city={city} offers={offers} key={city} />)}
    </ul>
  );
}

export default FavoriteListComponent;
