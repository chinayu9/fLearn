import React,{ Component } from 'react';
import Header from './Header';
import Main from './Main';
import { getUrlParam } from '../utils/fUtils';
class Home extends Component{
	constructor(props){
		super(props);
		let tab = "all";
		let curPage = 1;
		const maxPage = 30;
		const { search } = props.location;
		if (search) {
			tab = getUrlParam(search,"tab");
			curPage = +( getUrlParam(search,"page") || 1 );
		}
		let pagText = this.updatePagText(maxPage,curPage);
		this.state={
			tab,
			curPage,
			maxPage,
			pagText,
			topicList:[],
			ctMenu:[
				{
					title:"全部",
					path:"/?tab=all",
					tab:"all"
				},
				{
					title:"精华",
					path:"/?tab=good",
					tab:"good"
				},
				{
					title:"分享",
					path:"/?tab=share",
					tab:"share"
				},
				{
					title:"问答",
					path:"/?tab=ask",
					tab:"ask"
				},
				{
					title:"招聘",
					path:"/?tab=job",
					tab:"job"
				}
			]
		};
	}
	componentWillMount(){
		fetch(`https://cnodejs.org/api/v1/topics?tab=${this.state.tab}&page=${this.state.curPage}`)
			.then(res=>res.json())
			.then(res=>{
				if (res.success) {
					this.setState({
						topicList:res.data
					});
				}
			});
	}

	componentWillReceiveProps(nextProps){
		let tab = "all";
		let curPage = 1;
		const maxPage = 30;
		const { search } = nextProps.location;
		if (search) {
			tab = getUrlParam(search,"tab");
			curPage = +( getUrlParam(search,"page") || 1 );
		}
		let pagText = this.updatePagText(maxPage,curPage);
		fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${curPage}`)
			.then(res=>res.json())
			.then(res=>{
				if (res.success) {
					this.setState({
						topicList:res.data,
						tab,
						curPage,
						maxPage,
						pagText
					});
				}
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