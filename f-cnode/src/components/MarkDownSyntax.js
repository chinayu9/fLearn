import React,{ Component } from 'react';

class MarkDownSyntax extends Component{
	render(){
		return (
			<div className="panel">
				<div className="p-header"><span className="col-fade">Markdown语法参考</span></div>
				<div className="p-inner">
					<ol>
						<li>### 单行的标题</li>
						<li>**粗体**</li>
						<li>`console.log('行内代码')`</li>
						<li>```js\n code \n```</li>
						<li>[内容](链接)</li>
						<li>![文字说明](图片链接)</li>
					</ol>
					<span><a href="https://segmentfault.com/markdown" target="_blank">Markdown 文档</a></span>
				</div>
			</div>
		);
	}
}


export default MarkDownSyntax;