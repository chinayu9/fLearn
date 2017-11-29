import React,{ Component } from 'react';

class OtherTopic extends Component{
	render(){
		return (
			<div className="panel">
				<div className="p-header"><span className="col-fade">作者其他话题</span></div>
				<div className="p-inner">
					<ul>
						<li><a href="" title="IWinter 一个路由转控制器的 Nodejs 库" className="topic-title">IWinter 一个路由转控制器的 Nodejs 库</a></li>
						<li><a href="" title="AccountSystem 一个小型库存管理系统" className="topic-title">AccountSystem 一个小型库存管理系统</a></li>
						<li><a href="" title="EventHelper 异步并发处理" className="topic-title">EventHelper 异步并发处理</a></li>
						<li><a href="" title="AntMobile tab 切换解决方案" className="topic-title">AntMobile tab 切换解决方案</a></li>
					</ul>
				</div>
			</div>
		);
	}
}


export default OtherTopic;