import React, { Component } from 'react';
/*
import Create from "./Create";
import Read   from "./Read";
import Update from "./Update";
import Delete from "./Delete";
*/
// URL to menu data on the left
const _MenuURL = 'https://24.164.14.197:5001/Residents';

class Details extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {acct: []};

	}

	componentDidMount()
	{
		if(this.props.id != null)
		{
			this.GetDetails(this.props.id);
		}
	}

	//#region Get Details
	GetDetails = (_ID) => 
	{
		//Get a JSON List from the server
		fetch(_MenuURL+"/Details/"+_ID, 
				{
					crossDomain : true,
					method : 'POST',			// *GET, POST, PUT, DELETE, etc.
			//		mode : "cors",				// no-cors, cors, *same-origin
					cache : 'no-cache',			// *default, no-cache, reload, force-cache, only-if-cached
			//		credentials : 'omit',		// include, *same-origin, omit
			//		Accept : 'application/json',	//
			//		body : JSON.stringify({text: ''}),
					headers : {
							'Content-Type': 'application/json;'
	//							'Access-Control-Request-Headers' : 'x-suiteRole-header',
	//							'Access-Control-Request-Methods' : 'POST'
							},
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
								this.setState({ acct: result })  ;
							},
							// Handle result Error
							(_Error3) => 
							{
								console.log("Error 3: " + _Error3);
							}
						)
					}
					// Process the error.
					else
					{
						console.log("Response Error: "+response.statusText);
					};
				}
			)
		// Handle the other types of errors.
		.catch((_Error1) => 
		{
			console.log("Error 1: " + _Error1);
		})
	}

	//#endregion

	// This is used in the SelectionMenu to display a specific resident.
	// A change in state causes a page reload. Thus displaying the desired info.
	ShowResident = (_ID) => 
	{
		this.GetDetails(_ID);
	};

	render ()
	{
		switch(this.props.action)
		{
			case "CREATE":
				return (<b>Create</b>);//<Create acct={acct} />;
			case "UPDATE":
				return (<b>Update</b>);//<Update acct={acct} />;
			case "DELETE":
				return (<b>Delete</b>);//<Delete acct={acct} />;
			default:
				return (<b>Read</b>);//<Read   acct={acct} />;
		}
	}
}

export default Details;