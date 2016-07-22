import React from 'react';
import browserHistory from 'react-router/lib/browserHistory';
import configureStore from './Store';
import { syncHistoryWithStore } from 'react-router-redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { routes } from './Routes';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  	<Provider store={ store }>
    	{ routes(history) }
	</Provider>,
  	document.getElementById('content')
);