import React,{ Component } from 'react';

class IntegerRanking extends Component{
	render(){
		return (
			<div className="panel">
				<div className="p-header">
					<span className="col-fade">积分榜 <a href="" >Top 100 >></a></span>
				</div>
				<div className="p-inner">
					<ol>
						<li>
							<span className="top-score">20200</span>
							<span className="user-name"><a href="/">i5ting</a></span>
						</li>
						<li>
							<span className="top-score">14685</span>
							<span className="user-name"><a href="/">alsotang</a></span>
						</li>
						<li>
							<span className="top-score">9330</span>
							<span className="user-name"><a href="/">leapon</a></span>
						</li>
						<li>
							<span className="top-score">8715</span>
							<span className="user-name"><a href="/">jiyinyiyong</a></span>
						</li>
						<li>
							<span className="top-score">6660</span>
							<span className="user-name"><a href="/">yakczh</a></span>
						</li>
						<li>
							<span className="top-score">5900</span>
							<span className="user-name"><a href="/">DevinXian</a></span>
						</li>
						<li>
							<span className="top-score">5815</span>
							<span className="user-name"><a href="/">imhered</a></span>
						</li>
						<li>
							<span className="top-score">5290</span>
							<span className="user-name"><a href="/">magicdawn</a></span>
						</li>
						<li>
							<span className="top-score">4735</span>
							<span className="user-name"><a href="/">captainblue2013</a></span>
						</li>
						<li>
							<span className="top-score">4480</span>
							<span className="user-name"><a href="/">  fengmk2</a></span>
						</li>
					</ol>
				</div>
			</div>
		);
	}
}

export default IntegerRanking;			