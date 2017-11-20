import React,{ Component } from 'react';
import SubjectStyle from '../css/Subject.css';

class Subject extends Component{
	constructor(){
		super();
		this.state = {
			subject:{}
		};
	}

	componentWillMount(){
		const { match } = this.props;
		const { id } = match.params;
		fetch(`https://api.douban.com/v2/movie/subject/${id}`)
			.then(res=>res.json())
			.then(res=>{
				console.log(res);
				this.setState({
					subject:res
				});
			});
	}

	render(){	
		const sub = this.state.subject;
		return (
			<div className="sub-content">
				<h1><span className="sub-title">{sub.title}</span><span className="sub-year">({sub.year})</span></h1>
				<div className="sub-wrapper">
					<img className="sub-poster" src={sub.images ? sub.images.small : ""} />
					<div className="sub-info">
						<span>
							<span className="pl">导演：</span>
							<span className="attrs">			
								{
									sub.directors ? sub.directors.map((director,index)=>
										<a href={director.alt} key={index} target="_blank">{ director.name }</a>
									) : ""
								}		
							</span>
						</span>					

						<span>
							<span className="pl">主演：</span>
							<span className="attrs">			
								{
									sub.casts ? sub.casts.map((cast,index)=>
										<a href={cast.alt} key={index} target="_blank">{ cast.name }</a>
									) : ""
								}		
							</span>
						</span>

						<span>
							<span className="pl">类型：</span>
							{ sub.genres ? sub.genres.join(" / ") : "" }
						</span>

						<span>
							<span className="pl">制片国家/地区：</span>
							{ sub.countries ? sub.countries.join(" / ") : "" }
						</span>

						<span>
							<span className="pl">又名：</span>
							<span className="attrs">			
								{
									sub.aka ? sub.aka.map(aka=>aka).join(" / ") : ""
								}		
							</span>
						</span>

					</div>

					<div className="rating-container">
						<div className="rating-title">douban评分</div>
						<div className="rating-average">{sub.rating ? sub.rating.average : "暂无评分"}</div>
						<div className="rating-count">{sub.ratings_count ? sub.ratings_count : 0}人评论</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Subject;