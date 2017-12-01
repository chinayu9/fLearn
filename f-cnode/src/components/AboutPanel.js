import React,{ Component } from 'react';


class AboutPanel extends Component{
	render(){
		return (
			<div className="panel">
				<div className="p-header"><span className="col-fade">关于</span></div>
				<div className="p-inner">
					<p>CNode：Node.js专业中文社区</p>
					<p>在这里你可以：</p>
					<ul className="about-panel-ul">
						<li>向别人提出你遇到的问题</li>
						<li>帮助遇到问题的人</li>
						<li>分享自己的知识</li>
						<li>和其它人一起进步</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default AboutPanel;