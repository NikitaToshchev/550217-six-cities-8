import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { mockOffers } from './mocks/offers';
import { mockReviews } from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={mockOffers}
      reviews={mockReviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
