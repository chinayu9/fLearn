import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import Login from './containers/Login';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunkMiddleware from 'redux-thunk';
import AppReducer from './reducers/AppReducer';

const store = createStore(AppReducer,applyMiddleware(reduxThunkMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<Login />
	</Provider>,
	document.getElementById("root")
);