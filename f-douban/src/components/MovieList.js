import React,{ Component } from 'react';
import MovieListItem from './MovieListItem';

class MovieList extends Component{

	render(){
		return (
			<ul className="movie-list-container">
				{
					this.props.subjects.map((subject,index)=>
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