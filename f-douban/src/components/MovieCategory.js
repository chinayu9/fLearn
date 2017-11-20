import React,{ Component } from 'react';
import MoviecategoryItem from './MovieCategoryItem';


class MovieCategory extends Component{
	constructor(){
		super();
		this.state = {
			categoryNames : [],
			categoryActive:0
		};
	}
	componentDidMount(){
		this.setState({
			categoryNames : ["正在热映","即将上映","Top250","口碑榜","北美票房榜","新片榜"]
		});
	}

	onClickHandler(index){
		this.setState({
			categoryActive:index
		});
	}
	render(){
		return (
			<ul className="movie-category-container">
				{
					this.state.categoryNames.map((categoryName,index)=>
						<MoviecategoryItem 
							categoryName={categoryName} 
							key={index}
							index={index}
							categoryActive={this.state.categoryActive === index ? true : false} 
							onClickHandler={this.onClickHandler.bind(this)}
					/>)
				}
			</ul>
		);
	}
}

export default MovieCategory;