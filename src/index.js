import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Views from './views';
import persistState from 'redux-localstorage';

const store = createStore(
	reducers,
	compose(
		persistState(),
		applyMiddleware(
			thunk,
		),
	)
);

const rootEl = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
	<Views />
</Provider>
	, rootEl);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./views', () => {
    const NextApp = require('./views').default
    ReactDOM.render(
			<Provider store={store}>
	      <NextApp />
      </Provider>,
      rootEl
    )
  })
}