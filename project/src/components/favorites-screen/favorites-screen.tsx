import FooterComponet from '../footer/footer';
import HeaderComponet from '../header/header';
import FavoritesEmptyComponent from '../favorites-empty/favorites-empty';
import FavoritesComponent from '../favorites/favorites';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { getOffers } from '../../store/selectors/selectors';

const mapStateToProps = (state: State) => ({
  offers: getOffers(state),
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function FavoritesScreen({ offers }: PropsFromRedux): JSX.Element {
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

export { FavoritesScreen };
export default connector(FavoritesScreen);

