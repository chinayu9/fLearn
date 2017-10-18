import React,{Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';
class Greeter extends Component{
	render() {
		return (
			<div id={styles.test} >{config.greetText+" World"}</div>
		);
	}
}

export default Greeter