import React,{ Component } from 'react';
import MovieList from './MovieList';

class Nav extends Component{
	render(){
		return (
			<nav>
				<MovieList />
			</nav>
		);
	}
}

export default Nav;