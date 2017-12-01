import React,{ Component } from 'react';
import { BrowserRouter as Router,Link,Route } from 'react-router-dom';
import Home from './Home';
import TopicDetail from './TopicDetail';
import LoginPage from './LoginPage';
import Logout from '../components/Logout';

class App extends Component{
	render(){
		return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/topic/:id" component={TopicDetail} />
					<Route path="/login" component={LoginPage} />
					<Route path="/logout" component={Logout} />
				</div>
			</Router>
		);
	}
}

export default App;