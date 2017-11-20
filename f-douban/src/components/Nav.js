import React,{ Component } from 'react';
import MovieCategory from './MovieCategory';

class Nav extends Component{
	render(){
		return (
			<nav>
				<MovieCategory 
					onClickHandler={this.props.onClickHandler} 
					categoryNames={this.props.categoryNames}
					categoryActive={this.props.categoryActive}
				/>
			</nav>
		);
	}
}

export default Nav;