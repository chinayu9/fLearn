import React,{ Component } from 'react';

class MovieListItem extends Component{
	render(){
		return (
			<li className="movie-list-item">
				<img src={this.props.subject.images.large} className="movie-poster"/>
				<div className="movie-intro">
					{this.props.subject.title} 
					<span className="movie-rating-average">{this.props.subject.rating.average}</span>
				</div>
			</li>
		);
	}
}


export default MovieListItem;