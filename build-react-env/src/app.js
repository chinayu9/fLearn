import React from 'react';
import ReactDOM from 'react-dom';
class Hello extends React.Component{
	render(){
		return <input type="text" name="nname"/>;
	}
}
let ele = <div>
	<h1>hello 0000</h1>
	<Hello />
</div>;
console.log("hello world");
ReactDOM.render(
	ele,
	document.getElementById("root")
);