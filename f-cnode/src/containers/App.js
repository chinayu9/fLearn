import React,{ Component } from 'react';
import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';
import Home from './Home';
import TopicDetail from './TopicDetail';
import LoginPage from './LoginPage';
import Logout from '../components/Logout';
import CreateTopic from './CreateTopic';

class App extends Component{
	render(){
		return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={LoginPage} />
					<Route path="/logout" component={Logout} />
					<Switch>
						<Route path="/topic/create" component={CreateTopic} />
						<Route path="/topic/:id" component={TopicDetail} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;