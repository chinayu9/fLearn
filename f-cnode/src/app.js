import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Link,Route } from 'react-router-dom';
import style from './style.css';
import Home from './components/Home';

ReactDOM.render(
	<Router>
		<Route exact path="/" component={Home} />
	</Router>,
	document.getElementById("root")
);