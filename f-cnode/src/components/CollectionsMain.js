import React,{ Component } from 'react';
import CollectionsContent from './CollectionsContent';
import CollectionsSideBar from './CollectionsSideBar';

class CollectionsMain extends Component{

	render(){
		return (
			<div id="main">
				<CollectionsContent {...this.props}/>
				<CollectionsSideBar loginname={this.props.loginname}/>
			</div>
		);
		
	}
}

export default CollectionsMain;