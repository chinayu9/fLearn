import React,{ Component } from 'react';
import ContentMenuItem from './ContentMenuItem';

class ContentMenu extends Component{
	render(){
		return (
			<ul className="ct-menu">
				{
					this.props.ctMenu.map((item,index)=>
						<ContentMenuItem 
							key={index} 
							item={item}
							tab={this.props.tab} />)
				}
			</ul>
		);
	}
}

export default ContentMenu;