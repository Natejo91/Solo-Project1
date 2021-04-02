import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { restoreCSRF, csrfFetch } from './store/csrf';
import './index.css';
import App from './App';
import configureStore from './store';
import * as sessionActions from './store/session';
import * as venueActions from './store/venue';
import * as searchActions from './store/search';
import * as reservationActions from './store/reservation';
import * as reviewActions from './store/review';

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();
  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.venueActions = venueActions;
  window.searchActions = searchActions;
  window.reservationActions = reservationActions;
  window.reviewActions = reviewActions;
}

function Root() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
