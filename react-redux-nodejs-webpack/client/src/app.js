import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import UserAdd from './page/UserAdd';
import UserList from './page/UserList';
import UserEdit from './page/UserEdit';
import Home from './page/Home';

ReactDOM.render(
	<Router >
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/user/add" component={UserAdd} />
			<Route path="/user/list" component={UserList} />
			<Route path="/user/edit/:id" component={UserEdit} />
		</div>
	</Router>,
	document.getElementById("root")
);