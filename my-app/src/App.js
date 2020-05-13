import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Car from './Car/Car.js'
// function App() { 
// 	return (
// 		<div className="App">
// 			<Car name = "Ford" year = "2011" />
// 			<Car name = "BMW" year = "2012" />
// 		</div>
// 	);
// }
class App extends Component {
	state = {
		cars: [
			{name: "Ford", year: 2011},
			{name: "BMW", year: 2012},
			{name: "Mesredes", year: 2000}
		],
		title: "Hello your cars is:"
	}
	changeTitleHandler = () => {
		console.log("clicked");
		this.setState({
			title: "Your title is changed"
		})
	}

	render(){
		const cars = this.state.cars;
		return(
			<div className="App">
				<div>
					<h1>{this.state.title}</h1>
					<Car name = {cars[0].name} year = {cars[0].year}/>
					<Car name = {cars[1].name} year = {cars[1].year}/>
					<Car name = {cars[2].name} year = {cars[2].year}/>
				</div>
				<button onClick = {this.changeTitleHandler}>Change title</button>
			</div>
		);
	}
}

export default App;
