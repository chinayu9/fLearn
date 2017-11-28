import React,{ Component } from 'react';

class Advertisement extends Component{
	render(){
		return (
			<div className="panel">
				<div className="p-inner ads">
					<a href="https://alinode.aliyun.com/?ref=cnode" target="_blank">
						<img src="http://dn-cnode.qbox.me/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" />
					</a>
					<div className="sep10"></div>
					<a href="http://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc&utm_campaign=multicloud&utm_content=gift&ytag=cnodejs" target="_blank">
						<img src="http://dn-cnode.qbox.me/FgQS-GQDfqwAD_v0NuhyYUOUk5MG" />
					</a>
				</div>
			</div>
		);
	}
}


export default Advertisement;