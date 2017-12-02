import React,{ Component } from 'react';
import Header from '../components/Header';
import HomeMain from '../components/HomeMain';
import BackToTop from '../components/BackToTop';
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
			backToTop:false,
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
				},
				{
					title:"客户端测试",
					path:"/?tab=dev",
					tab:"dev"
				}
			]
		};
		this.scrollHander = this.scrollHander.bind(this);
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

	scrollHander(){
		const scrollTop = document.documentElement.scrollTop;
		let backToTop = false;
		backToTop = scrollTop > 700 ? true : false;
		if (backToTop === this.state.backToTop) {return;}
		this.setState({
			backToTop:backToTop
		});
	}
	componentDidMount(){
		window.addEventListener("scroll",this.scrollHander);
	}
	componentWillUnmount(){
		window.removeEventListener("scroll",this.scrollHander);
	}
	componentWillReceiveProps(nextProps){
		window.scroll(0,0);
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
				{this.state.backToTop ? <BackToTop /> : ""}
				<Header />
				<HomeMain {...this.state}/>
			</div>
		);
	}
}	

export default Home; 