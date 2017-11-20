import React,{ Component } from 'react';
import Nav from './Nav';
import MovieList from './MovieList';

class App extends Component{
	render(){
		return (
			<div>
				<Nav />
				<MovieList />
			</div>
		);
	}
}

export default App;