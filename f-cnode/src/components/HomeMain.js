import React,{ Component } from 'react';
import HomeContent from './HomeContent';
import HomeSideBar from './HomeSideBar';

class HomeMain extends Component{
	render(){
		return (
			<div id="main">
				<HomeContent {...this.props}/>
				<HomeSideBar />
			</div>
		);
		
	}
}

export default HomeMain;