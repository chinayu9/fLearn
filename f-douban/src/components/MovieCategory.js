import React,{ Component } from 'react';
import MoviecategoryItem from './MovieCategoryItem';


class MovieCategory extends Component{	
	render(){
		return (
			<ul className="movie-category-container">
				{
					this.props.categoryNames.map((categoryName,index)=>
						<MoviecategoryItem 
							categoryName={categoryName} 
							key={index}
							index={index}
							categoryActive={this.props.categoryActive === index ? true : false} 
							onClickHandler={this.props.onClickHandler}
					/>)
				}
			</ul>
		);
	}
}

export default MovieCategory;