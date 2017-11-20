import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './components/Home';
import Subject from './components/Subject';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={Home}></Route>
			<Route path="/subject/:id" component={Subject}></Route>
		</div>
	</Router>,
	document.getElementById("root")
);