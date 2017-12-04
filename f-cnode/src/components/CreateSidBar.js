import React,{ Component } from 'react';
import MarkDownSyntax from './MarkDownSyntax';
import TopicPostGuide from './TopicPostGuide';

class CreateSidBar extends Component{
	render(){
		return (
			<div className="sidebar">
				<MarkDownSyntax />
				<TopicPostGuide />
			</div>
		);
	}
}

export default CreateSidBar;