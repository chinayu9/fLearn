import React,{ Component } from 'react';
import HomeStyle from '../css/Home.css';
import Nav from './Nav';
import MovieList from './MovieList';

class Home extends Component{
	constructor(){
		super();
		this.state = {
			categoryNames : ["正在热映","即将上映","Top250"],
			categoryUrl:["/v2/movie/in_theaters","/v2/movie/coming_soon","/v2/movie/top250"],
			categoryActive:0,
			subjects:[]
		};
	}

	componentWillMount(){
		fetch(`https://api.douban.com${this.state.categoryUrl[this.state.categoryActive]}`)
			.then(res=>res.json())
			.then(res=>{
				this.setState({
					subjects:res.subjects
				});
			});
	}

	onClickHandler(index){
		fetch(`https://api.douban.com${this.state.categoryUrl[index]}`)
			.then(res=>res.json())
			.then(res=>{
				this.setState({
					categoryActive:index,
					subjects:res.subjects
				});
			});
	}

	render(){
		return (
			<div>
				<Nav 
					onClickHandler={this.onClickHandler.bind(this)} 
					categoryNames={this.state.categoryNames}
					categoryActive={this.state.categoryActive}
					/>
				<MovieList subjects={this.state.subjects} />
			</div>
		);
	}
}

export default Home;