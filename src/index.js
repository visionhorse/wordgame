import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';


// const logger = createLogger();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware, logger)));
export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
	<Provider store={store}>
    	<App />
    </Provider>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

