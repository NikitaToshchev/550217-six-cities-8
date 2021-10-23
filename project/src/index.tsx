import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { mockOffers } from './mocks/offers';
import { mockReviews } from './mocks/reviews';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App
        offers={mockOffers}
        reviews={mockReviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
