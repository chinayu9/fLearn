import React,{ Component } from 'react';


class PaginationItem extends Component{
	render(){
		const { curPage,maxPage,text,onClickPageListener } = this.props;
		let pageClassName = "";
		let disabled = false;
		if (text === '...') {
			pageClassName = "pagination-item";
			disabled = true;
		}else if (text === '«') {
			pageClassName = curPage === 1 ? "pagination-item disabled" : "pagination-item";
			disabled = curPage === 1 ? true : false;
		}else if (text === '»') {
			pageClassName = curPage === maxPage ? "pagination-item disabled" : "pagination-item";
			disabled = curPage === maxPage ? true : false;
		}else{
			pageClassName = curPage === text ? "pagination-item active disabled" : "pagination-item";
			disabled = curPage === text ? true : false;
		}
		return (
			<li className={pageClassName} onClick={()=>onClickPageListener(text,disabled)}>{text}</li>
		);
	}
}

export default PaginationItem;