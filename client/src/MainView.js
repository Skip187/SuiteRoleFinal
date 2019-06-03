import React, { Component } from 'react';

import Create from './screens/Create';
import Read   from './screens/Read';
import Update from './screens/Update';
import Delete from './screens/Delete';

// Import the style sheet.
import './MainView.css';

// URL to menu data on the left
//const _MenuURL = 'https://24.164.14.197:5001/Residents';
const _MenuURL = 'https://localhost:5001/Residents';

export default class MainView extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = { 
				error: null, 
				MenuLoaded: false, 
				isLoaded: false, 
				accts: [], 
				id: null, 
				action: "NULL"
			};
		this.hnd_Create = this.hnd_Create.bind(this);
//		this.hnd_Read   = Included for completion, but this is defined during the map process of _Menu.
		this.hnd_Update = this.hnd_Update.bind(this);
		this.hnd_Delete = this.hnd_Delete.bind(this);
	}

	// Get data for left menu
	// When this components has loaded, go to the _URL and get a list of resident to use as the left menu.
	componentWillMount()
	{
		this.GetMenu();
	}

	BuildMenu()
	{
		return this.state.accts.map( acct => <button className='ResLink' key={acct.id} onClick={() => this.hnd_BtnClick(event, acct.id)}>{acct.unitNum} - {acct.lastName1}</button>);
	}

	hnd_Create()
	{
		this.setState({action: "CREATE"});
	}

	hnd_BtnClick(e, _Acct)
	{
		console.log("MainView.js - hnd_BtnClick() receive '"+_Acct+"' as the _Acct from the button.");
		this.setState(() => { return {id: _Acct}});
		this.setState(() => {return{action:"READ"}}, () => {console.log("MainView.js - setState callback ACTION fired.")});
		if(this.state.id === null)
		{
			console.log("MainView.js - hnd_BtnClick() - state.id should NOT be NULL! Yet = "+this.state.id);
		}
	}

	hnd_Update()
	{
		this.setState({action: "UPDATE"});
	}

	hnd_Delete()
	{
		this.setState({action: "DELETE"});
	}

	hnd_Ready()
	{
		console.log("Updated");
	}

	_Msg_To_Parent(_Msg)
	{
		this.props.CBtoParent(_Msg);
	}

	_Msg_From_Child = (_Msg) =>
	{
		this._Msg_To_Parent(_Msg);
	}

//#region Get MenuData
	GetMenu = () => 
	{
		//Get a JSON List from the server
		fetch(_MenuURL, 
				{
					crossDomain : true,
					method : 'POST',			// *GET, POST, PUT, DELETE, etc.
			//		mode : "cors",				// no-cors, cors, *same-origin
					cache : 'no-cache',			// *default, no-cache, reload, force-cache, only-if-cached
			//		credentials : 'omit',		// include, *same-origin, omit
					headers : {
							'Content-Type': 'application/json;'
			//				'Access-Control-Request-Headers' : 'x-suiteRole-header',
			//				'Access-Control-Request-Methods' : 'POST'
						}
			//			redirect: 'follow',			// manual, *follow, error
			//			referrer: 'no-referrer',	// no-referrer, *client
			//		body : JSON.stringify({text: ''}),
				}
			)
		// Handle the JSON Promise
		.then(
				// Handle the Promise response.
				(response) => 
				{
					// If the response is OK, collect the JSON list, else process the error.
					if(response.ok)
					{
						response.json()

						.then(
							// Handle the result
							(result) => 
							{
								this.setState(() => {return { MenuLoaded: true, accts: result }});
							},
							// Handle result Error
							(_Error3) => 
							{
								this.setState(() => {return { MenuLoaded: false, error: "Result Error 3: "+_Error3 }});
							}
						)
					}
					// Process the error.
					else
					{
						this.setState({error: 'Response Error: '+response.statusText});
					};
				}
			)
		// Handle the other types of errors.
		.catch((_Error1) => 
		{
			this.setState({error: 'Fetch Error: \n'+_Error1});
		})
	}
//#endregion

	render()
	{
		const { error, MenuLoaded, id, action} = this.state;
		let _View = "";
		let _Options = "";

		console.log("MainView.js is rendering with state.id = "+id);
		console.log("MainView.js is rendering with state.action = "+action);

		if(error != null)
		{
			return(<section><h1 id='ErrorMsg'>MainView 1: <br />{error}</h1></section>);
		}

		if( MenuLoaded )
		{
			switch(action)
			{
				case "CREATE":
						_View = <Create />;
						break;

				case "READ":
						_View = <Read id={id} />;
						_Options = 	<div id='options'>
										<button className='option_button' onClick={this.hnd_Create}>CREATE</button>
										<button className='option_button' onClick={this.hnd_Update}>UPDATE</button>
										<button className='option_button' onClick={this.hnd_Delete}>DELETE</button>
									</div>;
						break;
		
				case "UPDATE":
						_View = <Update id={id} CBtoParent={this._Msg_From_Child} />;
						break;
	
				case "DELETE":
						_View = <Delete id={id} />;
						break;
					
				case "NULL":
						_Options = 	<div id='options'>
										<button className='option_button' onClick={this.hnd_Create}>CREATE</button>
									</div>;
						break;
				default:
						_View = <h2 id='ErrorMsg'>ERROR in State!</h2>;
						break;
			}

			return (
				<section>
					<div id='SelectionMenu'>
						{this.BuildMenu()}
					</div>
					{_View}
					{_Options}
				</section>
			);
		}
		else
		{
			return(<section><h1 id='ErrorMsg'>Menu Loading ...</h1></section>);
		}
	}
}