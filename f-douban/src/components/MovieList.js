import React,{ Component } from 'react';
import MovieListItem from './MovieListItem';


class MovieList extends Component{
	constructor(){
		super();
		this.state = {
			listNames : [],
			listActive:0
		};
	}
	componentDidMount(){
		this.setState({
			listNames : ["正在热映","即将上映","Top250","口碑榜","北美票房榜","新片榜"]
		});
	}

	onClickHandler(index){
		this.setState({
			listActive:index
		});
	}
	render(){
		return (
			<ul className="movie-list-container">
				{
					this.state.listNames.map((listName,index)=>
						<MovieListItem 
							listName={listName} 
							key={index}
							index={index}
							listActive={this.state.listActive === index ? true : false} 
							onClickHandler={this.onClickHandler.bind(this)}
					/>)
				}
			</ul>
		);
	}
}

export default MovieList;