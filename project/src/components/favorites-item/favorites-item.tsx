import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import FavoritesItemCard from '../favorites-item-card/favorites-item-card';

type FavoritesItemProps = {
  favoritesOffers: Offer[];
  city: string,
}

function FavoritesItem({ city, favoritesOffers }: FavoritesItemProps): JSX.Element {
  const cityByOffers = favoritesOffers.filter((offer) => city === offer.city.name);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={'/'}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {cityByOffers.map((offer) => (
          <FavoritesItemCard
            key={offer.id}
            offer={offer}
          />),
        )}
      </div>
    </li>
  );
}

export default FavoritesItem;
