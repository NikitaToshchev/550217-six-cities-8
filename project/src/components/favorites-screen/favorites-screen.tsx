import FooterComponet from '../footer/footer';
import HeaderComponet from '../header/header';
import { Offers } from '../../types/offers';
import FavoritesEmptyComponent from '../favorites-empty/favorites-empty';
import FavoritesComponent from '../favorites/favorites';

type FavoritesScreenProps = {
  offers: Offers;
}

function FavoritesScreen({ offers }: FavoritesScreenProps): JSX.Element {

  const pageMainFavoritesClass = offers.length ? 'page' : 'page page--favorites-empty';
  const content = offers.length ? <FavoritesComponent offers={offers} /> : <FavoritesEmptyComponent />;
  return (
    <div className={pageMainFavoritesClass}>
      <HeaderComponet />
      {content}
      <FooterComponet />
    </div>
  );
}

export default FavoritesScreen;
