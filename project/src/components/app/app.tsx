import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';

type AppProps = {
  offers: Offers,
  reviews: Reviews,
}

function App({ offers, reviews }: AppProps): JSX.Element {
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);

  const nearOffers = offers.slice(0, 3);
  // добавить хук с id
  // const offer = offers.find((item) => item.id === id);
  const offer = offers[0];
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen offers={offers} />
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
            offer={offer}
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

export default App;
