import React,{ Component } from 'react';

class TopicPostGuide extends Component{
	render(){
		return (
			<div className="panel">
				<div className="p-header"><span className="col-fade">话题发布指南</span></div>
				<div className="p-inner">
				<ol>
					<li>尽量把话题要点浓缩到标题里</li>
					<li>代码含义和报错可在 SegmentFault 提问</li>
				</ol>
				</div>
			</div>
		);
	}
}


export default TopicPostGuide;