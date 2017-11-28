import React,{ Component } from 'react';


class Community extends Component{
	render(){
		return (
			<div className="panel">
				<div className="p-header"><span className="col-fade">友情社区</span></div>
				<div className="p-inner">
					<ol className="friendship-community">
						<li><a href="/"><img src="http://o4j806krb.qnssl.com/public/images/ruby-china-20150529.png" /></a></li>
						<div className="sep10"></div>
						<li><a href="/"><img src="http://o4j806krb.qnssl.com/public/images/golangtc-logo.png" /></a></li>
						<div className="sep10"></div>
						<li><a href="/"><img src="http://o4j806krb.qnssl.com/public/images/phphub-logo.png" /></a></li>
						<div className="sep10"></div>
						<li><a href="/"><img src="http://dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK" /></a></li>
					</ol>
				</div>
			</div>
		);
	}
}

export default Community;