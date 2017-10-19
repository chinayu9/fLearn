import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
class Hello extends React.Component{
	render(){
		return <input type="text" name="nname"/>;
	}
}
let ele = <div>
	<h1>hello webpack and react</h1>
	<Hello />
</div>;

ReactDOM.render(
	ele,
	document.getElementById("root")
);