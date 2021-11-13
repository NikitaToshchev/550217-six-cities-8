import FooterComponet from '../footer/footer';
import HeaderComponet from '../header/header';
import FavoritesEmptyComponent from '../favorites-empty/favorites-empty';
import FavoritesComponent from '../favorites/favorites';
import { useSelector } from 'react-redux';
import { getOffers } from '../../store/selectors/selectors';

function FavoritesScreen(): JSX.Element {
  const offers = useSelector(getOffers);

  const favoritesOffers = offers.filter((offer) => offer.isFavorite);

  const pageMainFavoritesClass = offers.length ? 'page' : 'page page--favorites-empty';
  const content = offers.length ? <FavoritesComponent offers={favoritesOffers} /> : <FavoritesEmptyComponent />;
  return (
    <div className={pageMainFavoritesClass}>
      <HeaderComponet />
      {content}
      <FooterComponet />
    </div>
  );
}

export default FavoritesScreen;

