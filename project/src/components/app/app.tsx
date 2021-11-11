import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../utils/utils';

const mapStateToProps = ({ authorizationStatus, isDataLoaded }: State) => ({
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({ authorizationStatus, isDataLoaded }: PropsFromRedux): JSX.Element {

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen />
        </Route>
        <Route
          exact
          path={AppRoute.SignIn}
          render={() => (
            authorizationStatus === AuthorizationStatus.Auth
              ? <Redirect to={AppRoute.Main} />
              : <SignInScreen />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <RoomScreen />
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
