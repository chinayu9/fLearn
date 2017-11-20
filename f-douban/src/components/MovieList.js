import React,{ Component } from 'react';
import MovieListItem from './MovieListItem';

class MovieList extends Component{
	constructor(){
		super();
		this.state = {
			subjects:[]
		};
	}
	componentWillMount(){
		fetch("https://api.douban.com/v2/movie/in_theaters")
			.then(res=>res.json())
			.then(res=>{
				this.setState({
					subjects:res.subjects
				});
			});
	}

	render(){
		return (
			<ul className="movie-list-container">
				{
					this.state.subjects.map((subject,index)=>
						<MovieListItem 
							key={subject.id}
							id={subject.id}
							subject={subject}
					/>)
				}
			</ul>
		);
	}
}

export default MovieList;