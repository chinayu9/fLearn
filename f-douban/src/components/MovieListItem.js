import React,{ Component } from 'react';


class MovieListItem extends Component{
	handleClickListener(){
		this.props.onClickHandler(this.props.index);
	}
	render(){
		return (
			<li 
				className={this.props.listActive ? "movie-list-item movie-list-active" : "movie-list-item" } 
				onClick={this.handleClickListener.bind(this)}
			>
				{this.props.listName}
			</li>
		);
	}
}

export default MovieListItem;