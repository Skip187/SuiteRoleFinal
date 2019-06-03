import React, { Component } from 'react';
//import logo from './images/S1.jpg';

import './App.css';
import MainView from './MainView.js';

class App extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = { message: "" };
	}

	_Msg_From_Child = (_Msg) =>
	{
		this.setState({message: _Msg});
	}

	render() 
	{
		return (
			<div className="App">
				<div className="App-header">
					{/* <img src={logo} className="App-logo" alt="logo" /> */}
					<h2>SuiteRole V6.02</h2>
				</div>
				<MainView CBtoParent={this._Msg_From_Child} />
				<div className="App-footer">
					&nbsp; {this.state.message}
				</div>
			</div>
		);

	}
}

export default App;