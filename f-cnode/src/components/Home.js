import React,{ Component } from 'react';
import Header from './Header';
import Main from './Main';
class Home extends Component{
	constructor(props){
		super(props);
		let tab = "all";
		let curPage = 1;
		const maxPage = 88;
		let pagText = this.updatePagText(maxPage,curPage);
		const { search } = props.location;
		console.log(search+"======");
		this.state={
			tab,
			curPage,
			maxPage,
			pagText,
			topicList:[],
		};
	}
	componentWillMount(){
		fetch(`https://cnodejs.org/api/v1/topics?tab=${this.state.tab}&page=${this.state.page}`)
			.then(res=>res.json())
			.then(res=>{
				if (res.success) {
					this.setState({
						topicList:res.data
					});
				}
				console.log(res.data);
			});
	}

	updatePagText(maxPage,curPage){
		let pagText = [];
		//maxPage<=5  
		if (maxPage <= 5) {
			let pagText = ["»"];
			let tmpMaxPage = maxPage;
			while(tmpMaxPage > 0){
				pagText.push(tmpMaxPage);
				tmpMaxPage = tmpMaxPage - 1;
			}
			pagText.push("«");
			pagText = pagText.reverse();
		}else{
			if (curPage<=3) {
				pagText = ["«",1,2,3,4,5,"...","»"];
			}else if(maxPage === curPage){
				pagText = ["«","...",curPage-2,curPage-1,curPage,"»"];
			}else if(maxPage - curPage === 1){
				pagText = ["«","...",curPage-2,curPage-1,curPage,curPage+1,"»"];
			}else{
				pagText = ["«","...",curPage-2,curPage-1,curPage,curPage+1,curPage+2,"...","»"];
			}
		}
		return pagText;
	}
	render(){
		return (
			<div>
				<Header />
				<Main {...this.state}/>
			</div>
		);
	}
}	

export default Home; 