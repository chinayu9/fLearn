import React,{ Component } from 'react';

class NoReplyTopic extends Component{
	render(){
		return (
			<div className="panel">
				<div className="p-header"><span className="col-fade">无人回复的话题</span></div>
				<div className="p-inner">
					<ul>
						<li><a href="" title="js图片上传是用二进制串还是表单提交啊" className="topic-title">js图片上传是用二进制串还是表单提交啊</a></li>
						<li><a href="" title="node入门的博客系统" className="topic-title">node入门的博客系统</a></li>
						<li><a href="" title="编写一个简单，优雅，可扩展的JS数据校验库Struct" className="topic-title">编写一个简单，优雅，可扩展的JS数据校验库Struct</a></li>
						<li><a href="" title="express api 并发测试发现的奇怪问题" className="topic-title">express api 并发测试发现的奇怪问题</a></li>
						<li><a href="" title="koa-session中间件的源码解读" className="topic-title">koa-session中间件的源码解读</a></li>
					</ul>
				</div>
			</div>
		);
	}
}


export default NoReplyTopic;