import React,{ Component } from 'react';
import MovieCategory from './MovieCategory';

class Nav extends Component{
	render(){
		return (
			<nav>
				<MovieCategory />
			</nav>
		);
	}
}

export default Nav;