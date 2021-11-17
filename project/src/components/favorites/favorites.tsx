import { Offer } from '../../types/offer';
import FavoriteList from '../favorites-list/favorites-list';

type FavoritesProps = {
  favoritesOffers: Offer[];
}

function Favorites({ favoritesOffers }: FavoritesProps): JSX.Element {
  const cityList = Array.from(new Set(favoritesOffers.map(({ city }) => city.name)));

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteList cities={cityList} favoritesOffers={favoritesOffers} />
        </section>
      </div>
    </main>
  );
}

export default Favorites;
