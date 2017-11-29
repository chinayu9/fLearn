import React,{ Component } from 'react';
import HomeContentMenuItem from './HomeContentMenuItem';

class HomeContentMenu extends Component{
	render(){
		return (
			<ul className="ct-menu">
				{
					this.props.ctMenu.map((item,index)=>
						<HomeContentMenuItem 
							key={index} 
							item={item}
							tab={this.props.tab} />)
				}
			</ul>
		);
	}
}

export default HomeContentMenu;