import React,{ Component } from 'react';


class MovieCategoryItem extends Component{
	handleClickcategoryener(){
		this.props.onClickHandler(this.props.index);
	}
	render(){
		return (
			<li 
				className={this.props.categoryActive ? "movie-category-item movie-category-active" : "movie-category-item" } 
				onClick={this.handleClickcategoryener.bind(this)}
			>
				{this.props.categoryName}
			</li>
		);
	}
}

export default MovieCategoryItem;