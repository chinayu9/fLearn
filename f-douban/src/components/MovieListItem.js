import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class MovieListItem extends Component{
	render(){
		return (
			<Link to={`/subject/${this.props.id}`}>
				<li className="movie-list-item">
					<img src={this.props.subject.images ? this.props.subject.images.large : ""} className="movie-poster"/>
					<div className="movie-intro">
						{this.props.subject.title} 
						<span className="movie-rating-average">{this.props.subject.rating ? this.props.subject.rating.average : 0}</span>
					</div>
				</li>
			</Link>
		);
	}
}


export default MovieListItem;