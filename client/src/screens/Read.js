import React, { Component } from 'react';

const _MenuURL = 'https://localhost:5001/Residents';

export default class _Read extends Component 
{
	constructor(props) 
	{
		super(props);
		console.log("Read.js Constructor received props.id as "+this.props.id+", and is setting it to state.id.");
		this.state = { acct: [], id: this.props.id };
		console.log("Read.js Constructor state.id = "+this.state.id);
	}

	//#region Get Details
	GetDetails = (_ID) => 
	{
		console.log("Read.js GetDetails for "+_ID);

		if(!_ID)
		{
			console.log("Read.js GetDetails for "+_ID+". Returning without details.");
			return;
		}
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
			//		body: new FormData(document.getElementById('myForm'),
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
								this.setState({ acct: result });
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
						console.log("Fetch Response Error: "+response.statusText);
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


	  componentWillReceiveProps()
	{
		console.log("Read.js WillReceiveProps has props.id: "+this.props.id);

		this.setState(() => {return {id: this.props.id}});

		console.log("Read.js WillReceiveProps has state.id: " + this.state.id);

//		this.setState({id: this.props.id});
		this.GetDetails(this.state.id);
	}

	componentWillMount()
	{
		console.log("Read.js WillMount - state.id = "+this.state.id);
		if(this.state.id != null)
		{
			console.log("Read.js WillMount - Passing props.id = "+this.props.id+" into GetDetails.");
			this.GetDetails(this.props.id);
		}
		else
		{
			console.log("Read.js Constructor - An ID prop is NOT being passed. It's NULL.");
		}
	}

	_SetupImage()
	{
		return <img src="./client/src/images/S1.jpg" alt="" />;
	}

	render()
	{
		let _SuiteImage = this._SetupImage();

		_Read = 
			<div id='ResDet'>
				<div id='_form'>
					<b className='line'>ID:			</b><u className='info'>{this.state.acct.id}			&nbsp;</u><br />
					<b className='line'>Owner:		</b><u className='info'>{this.state.acct.acctOwner}		&nbsp;</u><br />
					<b className='line'>Unit #:		</b><u className='info'>{this.state.acct.unitNum}		&nbsp;</u><br />
					<b className='line'>Last Name:	</b><u className='info'>{this.state.acct.lastName1}		&nbsp;</u><br />
					<b className='line'>First Name:	</b><u className='info'>{this.state.acct.firstName1}	&nbsp;</u><br />
					<b className='line'>Storage #:	</b><u className='info'>{this.state.acct.storageNum}	&nbsp;</u><br />
					<b className='line'>Contact #:	</b><u className='info'>{this.state.acct.contactNum1}	&nbsp;</u><br />
					<b className='line'>Contact #:	</b><u className='info'>{this.state.acct.contactNum2}	&nbsp;</u><br />
					<b className='line'>Contact #:	</b><u className='info'>{this.state.acct.contactNum3}	&nbsp;</u><br />
					<b className='line'>EMail:		</b><u className='info'>{this.state.acct.email1}		&nbsp;</u><br />
					<b className='line'>EMail:		</b><u className='info'>{this.state.acct.email2}		&nbsp;</u><br />
					<b className='line'>EMail:		</b><u className='info'>{this.state.acct.email3}		&nbsp;</u><br />
					<b className='line'>EMail:		</b><u className='info'>{this.state.acct.email4}		&nbsp;</u><br />
					<b className='line'>Parking #:	</b><u className='info'>{this.state.acct.parkingSpot1}	&nbsp;</u><br />
					<b className='line'>Parking #:	</b><u className='info'>{this.state.acct.parkingSpot2}	&nbsp;</u>
				</div>
				<div id="_image">
					
				</div>
			</div>

		console.log("Read.js - finished. Returning with component!");
		return(_Read);
	}
}