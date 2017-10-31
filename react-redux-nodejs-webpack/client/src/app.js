import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import UserAdd from './page/UserAdd';
import Home from './page/Home';

ReactDOM.render(
	<Router >
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/user/add" component={UserAdd} />
		</div>
	</Router>,
	document.getElementById("root")
);