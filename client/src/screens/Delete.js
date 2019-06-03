import React, { Component } from 'react';

const _MenuURL = 'https://localhost:5001/Residents';

export default class _Delete extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = { acct: [], id: this.props.id };
	}

	//#region Get Details
	GetDetails = (_Action, _ID) => 
	{
		console.log("Sending fetch to "+_MenuURL+_Action+_ID);
		//Get a JSON List from the server
		fetch(_MenuURL+_Action+_ID, 
				{
					crossDomain : true,
					method : 'POST',			// *GET, POST, PUT, DELETE, etc.
					cache : 'no-cache',			// *default, no-cache, reload, force-cache, only-if-cached
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
								if (_Action === "/DeleteConfirmed/")
								{
									window.location.reload();
								}
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
		console.log("Delete.js WillReceive State ID: "+this.state.id);
		console.log("Delete.js WillReceive Props ID: "+this.props.id);

		this.setState({id: this.props.id});
		this.GetDetails("/Details/",this.props.id);

		/*
		if(this.state.id !== this.props.id)
		{
			this.setState({id: this.props.id});
			this.GetDetails(this.state.id);
		}
		*/
	}

	componentWillMount()
	{
		if(this.state.id != null)
		{
			console.log("Delete.js WillMount - props.id = "+this.props.id);
			this.GetDetails("/Details/",this.props.id);
		}
		else
		{
			console.log("Delete.js Constructor - An ID prop is NOT being passed. It's NULL.");
		}
	}

	hnd_BtnClick(e, _Acct)
	{
		if(window.confirm("Are you sure?"))
		{
			this.GetDetails("/DeleteConfirmed/",this.state.acct.id);
		}
	}

	render()
	{
		_Delete = 
			<div id='ResDet'>
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
				<b className='line'>Parking #:	</b><u className='info'>{this.state.acct.parkingSpot2}	&nbsp;</u><br />
				<button onClick={() => this.hnd_BtnClick(this.state.acct.id)}> DELETE </button>
			</div>

		return(_Delete);
	}
	// POST: Residents/Delete/5
}