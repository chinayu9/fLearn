import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class HomeContentMenuItem extends Component{
	render(){
		const { item,tab } = this.props; 
		return (
			<li className={tab===item.tab ? "topic-tab current-tab" : "topic-tab" }><Link to={item.path}>{item.title}</Link></li>
		);
	}
}


export default HomeContentMenuItem;