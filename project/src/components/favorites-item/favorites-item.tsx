import { Link } from 'react-router-dom';
import { Offers } from '../../types/offers';
import FavoritesItemCardComponent from '../favorites-item-card/favorites-item-card';

type FavoritesItemProps = {
  offers: Offers;
  city: string,
}

function FavoritesItemComponent({ city, offers }: FavoritesItemProps): JSX.Element {
  const cityByOffers = offers.filter((offer) => city === offer.city.name);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          {/* ссылка на город */}
          <Link className="locations__item-link" to={'/'}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {cityByOffers.map((offer) => (
          <FavoritesItemCardComponent
            key={offer.id}
            offer={offer}
          />),
        )}
      </div>
    </li>
  );
}

export default FavoritesItemComponent;
