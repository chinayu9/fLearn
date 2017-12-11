import React,{ Component } from 'react';
import Header from '../components/Header';
import CollectionsMain from '../components/CollectionsMain';
import BackToTop from '../components/BackToTop';
import { getUrlParam } from '../utils/fUtils';
class Collections extends Component{
	constructor(props){
		super(props);
		let curPage = 1;
		const maxPage = 1;
		const { search } = props.location;
		if (search) {
			curPage = +( getUrlParam(search,"page") || 1 );
		}
		
		let pagText = this.updatePagText(maxPage,curPage);
		const loginname = props.match.params.id;
		this.state = {
			backToTop:false,
			loginname,
			topicList:[],
			showTopicList:[],
			tab:"",
			toUrl:`/user/${loginname}/collections`,
			curPage,
			maxPage,
			pagText
		};
		this.scrollHander = this.scrollHander.bind(this);
	}
	componentWillMount(){
		fetch(`https://cnodejs.org/api/v1/topic_collect/${this.state.loginname}`)
			.then(res=>res.json())
			.then(res=>{
				if (res.success) {
					const maxPage = Math.ceil(res.data.length / 40);
					let pagText = this.updatePagText(maxPage,this.state.curPage);
					this.setState({
						topicList:res.data,
						maxPage,
						pagText,
						showTopicList:res.data.slice((this.state.curPage - 1) * 40 ,this.state.curPage * 40)
					});
				}else{
					alert(res.error_msg);
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
		const { search } = nextProps.location;
		let curPage = 1;
		if (search) {
			curPage = +( getUrlParam(search,"page") || 1 );
		}
		let pagText = this.updatePagText(this.state.maxPage,curPage);
		this.setState({
			curPage,
			pagText,
			showTopicList:this.state.topicList.slice((curPage - 1) * 40 ,curPage * 40)
		});

	}
	updatePagText(maxPage,curPage){
		let pagText = [];
		//maxPage<=5  
		if (maxPage <= 5) {
			pagText = ["»"];
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
				<CollectionsMain {...this.state} />
			</div>
		);
	}
}

export default Collections;