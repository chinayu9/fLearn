import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class PaginationItem extends Component{
	render(){
		const { curPage,maxPage,text,tab,toUrl } = this.props;
		let pageClassName = "";
		let disabled = false;
		let toPage = 1;
		if (text === '...') {
			pageClassName = "pagination-item";
			disabled = true;
		}else if (text === '«') {
			pageClassName = curPage === 1 ? "pagination-item disabled" : "pagination-item";
			toPage = 1;
			disabled = curPage === 1 ? true : false;
		}else if (text === '»') {
			pageClassName = curPage === maxPage ? "pagination-item disabled" : "pagination-item";
			toPage = maxPage;
			disabled = curPage === maxPage ? true : false;
		}else{
			pageClassName = curPage === text ? "pagination-item active disabled" : "pagination-item";
			toPage = text;
			disabled = curPage === text ? true : false;
		}
		return (
			<li className={pageClassName} >
				{
					disabled ? <a>{text}</a> : <Link to={`${toUrl}?tab=${tab}&page=${toPage}`}>{text}</Link>
				}
			</li>
		);
	}
}

export default PaginationItem;