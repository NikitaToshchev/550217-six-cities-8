import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from './const';
import { createAPI } from './services/api';
import { requireAuthorizationSucces } from './store/actions/action';
import { fetchOffersAction, checkAuthAction } from './store/actions/api-actions';
import { ThunkAppDispatch } from './types/actions';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store/reducer/root-reducer';

const api = createAPI(
  () => store.dispatch(requireAuthorizationSucces(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
