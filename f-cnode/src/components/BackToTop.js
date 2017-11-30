import React,{ Component } from 'react';

class BackToTop extends Component{
	handleClickListener(){
		//设置定时器
	    let timer = setInterval(()=>{
	      //获取滚动条距离顶部高度
	      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
	      var ispeed = Math.floor(-osTop / 7);
	       //到达顶部，清除定时器
	      if (osTop <= 20) {
	      	document.documentElement.scrollTop = document.body.scrollTop = 0;
	        clearInterval(timer);
	        return;
	      };    
	      document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
	        
	    },30);
	}
	render(){
		return (
			<div id="back-to-top" onClick={this.handleClickListener}>回到顶部</div>
		);
	}
}

export default BackToTop;