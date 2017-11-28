import React,{ Component } from 'react';


class QRCode extends Component{
	render(){
		return (
			<div className="panel">
				<div className="p-header"><span className="col-fade">客户端二维码</span></div>
				<div className="p-inner cnode-app-download">
					<img src="https://dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU" className="qrcode-img" />
					<br />
					<a href="" target="_blank">客户端源码地址</a>
				</div>
			</div>
		);
	}
}

export default QRCode;