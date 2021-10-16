import { Offer } from '../../types/offer';
import FavoriteListComponent from '../favorites-list/favorites-list';

type FavoritesProps = {
  offers: Offer[];
}

function FavoritesComponent({ offers }: FavoritesProps): JSX.Element {
  const cityList = Array.from(new Set(offers.map(({ city }) => city.name)));

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteListComponent cities={cityList} offers={offers} />
        </section>
      </div>
    </main>
  );
}

export default FavoritesComponent;
