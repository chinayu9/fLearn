import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Link,Route } from 'react-router-dom';
import style from './style.css';
import Home from './containers/Home';
import TopicDetail from './containers/TopicDetail';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/topic/:id" component={TopicDetail} />
		</div>
	</Router>,
	document.getElementById("root")
);