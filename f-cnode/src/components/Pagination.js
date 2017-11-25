import React,{ Component } from 'react';
import PaginationItem from './PaginationItem';

class Pagination extends Component{
	constructor(){
		super();
		const maxPage = 88;
		let pagText = [];
		if (maxPage<=5) {//如果最大page小于5，初始化pageText
			pagText = ["»"];
			let tmpMaxPage = maxPage;
			while(tmpMaxPage > 0){
				pagText.push(tmpMaxPage);
				tmpMaxPage = tmpMaxPage - 1;
			}
			pagText.push("«");
			pagText = pagText.reverse();
		}else{
			pagText = ["«",1,2,3,4,5,"...","»"];
		}
		this.state={
			curPage:1,
			maxPage:maxPage,
			pagText:pagText
		};
	}
	onClickPageListener(text,disabled){
		if (disabled) {return;}
		//maxPage<=5  
		if (this.state.maxPage <= 5) {
			let pagText = ["»"];
			let tmpMaxPage = this.state.maxPage;
			while(tmpMaxPage > 0){
				pagText.push(tmpMaxPage);
				tmpMaxPage = tmpMaxPage - 1;
			}
			pagText.push("«");
			pagText = pagText.reverse();
			if (text === '«') {
				this.setState({
					curPage:1,
					pagText:pagText
				});
			}else if (text === '»') {
				const maxPage = this.state.maxPage;
				this.setState({
					curPage:this.state.maxPage,
					pagText:pagText
				});
			}else{
				this.setState({
					curPage:text,
					pagText:pagText
				});
			}
			
			return;
		}

		//maxPage > 5
		if (text === '«') {
			this.setState({
				curPage:1,
				pagText:["«",1,2,3,4,5,"...","»"]
			});
		}else if (text === '»') {
			const maxPage = this.state.maxPage;
			this.setState({
				curPage:this.state.maxPage,
				pagText:["«","...",maxPage-2,maxPage-1,maxPage,"»"]
			});
		}else{
			let pagText = [];
			const maxPage = this.state.maxPage;
			if (text<=3) {
				pagText = ["«",1,2,3,4,5,"...","»"];
			}else if(maxPage === text){
				pagText = ["«","...",text-2,text-1,text,"»"];
			}else if(maxPage - text === 1){
				pagText = ["«","...",text-2,text-1,text,text+1,"»"];
			}else{
				pagText = ["«","...",text-2,text-1,text,text+1,text+2,"...","»"];
			}
			this.setState({
				curPage:text,
				pagText:pagText
			});
		}
	}
	render(){
		const pagText = this.state.pagText;
		return (
			<div id="pagination">
				<ul>
					{
						pagText.map((text,index)=>
							<PaginationItem 
								key={pagText[index] + index}
								curPage={this.state.curPage}
								maxPage={this.state.maxPage}
								text={text}
								onClickPageListener={this.onClickPageListener.bind(this)} />)
					}
				</ul>
			</div>
		);	
	}
}

export default Pagination