import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';

type AppProps = {
  offers: Offer[],
  reviews: Review[],
  cities: string[],
}

const mapStateToProps = ({ currentCity, offers }: State) => ({
  currentCity,
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & AppProps;

function App({ offers, reviews, cities, currentCity }: ConnectedComponentProps): JSX.Element {
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  const nearOffers = offers.slice(0, 3);
  const offersByCity = offers.filter((offer) => offer.city.name === currentCity);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen
            offers={offersByCity}
            cities={cities}
            currentCity={currentCity}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen offers={favoritesOffers} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <RoomScreen
            offers={offers}
            reviews={reviews}
            nearOffers={nearOffers}
            authorizationStatus={AuthorizationStatus.Auth}
          />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export { App };
export default connector(App);
