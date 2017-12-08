import React,{ Component } from 'react';
import PaginationItem from './PaginationItem';

class Pagination extends Component{

	render(){
		const { pagText,curPage,maxPage,tab,toUrl }= this.props;
		return (
			<div id="pagination">
				<ul>
					{
						pagText.map((text,index)=>
							<PaginationItem 
								key={pagText[index] + index}
								curPage={curPage}
								maxPage={maxPage}
								tab={tab}
								text={text}
								toUrl={toUrl} />)
					}
				</ul>
			</div>
		);	
	}
}

export default Pagination