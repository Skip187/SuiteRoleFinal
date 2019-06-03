import React, { Component } from 'react';

const _MenuURL = 'https://localhost:5001/Residents';

export default class _Update extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {acct: []};

		console.log("Update.js - Constructor");
		this.GetDetails(props.id);

		this._onSubmit = this.AcctBuilder.bind(this);	// I purposely bound the function and listener with different names. Because I could.
	}


	hnd_test()
	{

	}

	AcctBuilder(e)
	{
		e.preventDefault();
		const _form = e.target;
		const _data = new FormData(_form);

		console.log("Form ID = ");
		console.log(_form.elements["ID"].value);
		console.log("Props ID = ");
		console.log(this.props.id);
		console.log("Form ID = ");
		console.log(_data.get("ID"));

		for(let _entry of _data.keys())
		{
			if(_entry === "ID")
			{
				_data.set(_entry,parseInt(_data.get(_entry),10));
			}

			console.log(_entry+"="+_data.get(_entry));
		}

		this.SendDetails(_data);
	}


//#region Get Details
	GetDetails = (_ID) => 
	{
		console.log("Update.js - GetDetails for ID: "+_ID);

		//Get a JSON List from the server
		fetch(_MenuURL+"/Details/"+_ID, 
				{
					crossDomain : true,
					method : 'POST',			// *GET, POST, PUT, DELETE, etc.
					cache : 'no-cache',			// *default, no-cache, reload, force-cache, only-if-cached
					headers : {
							'Content-Type': 'application/json;'
							}
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
	
//#region Send Details
SendDetails = (_FormData) => 
{
	console.error(_FormData);
	//Get a JSON List from the server
	fetch(_MenuURL+"/Edit/"+this.props.id, 
			{
				method : 'POST',			// *GET, POST, PUT, DELETE, etc.
				body: _FormData
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
							if(!window.confirm("Are you sure?"))
							{
								return;
							}
							this.setState({ acct: result }, () => { window.location.reload(); });
							let _Msg = "Record " + this.props.id + " has been updated!";
							this.props.CBtoParent(_Msg);
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

	render()
	{
		_Update =
		<div id='ResDet' className="">
			<form onSubmit={this._onSubmit}>
				<div className="form-group">
					<b className='line'>ID:				</b><input type="text"		className="info" defaultValue={this.state.acct.id}				name="ID"	readOnly	/><br />
					<b className='line'>Owner:			</b><input type="text"		className="info" defaultValue={this.state.acct.acctOwner}		name="AcctOwner"		/><br />
					<b className='line'>Unit Number:	</b><input type="text"		className="info" defaultValue={this.state.acct.unitNum}			name="UnitNum"			/><br />
					<b className='line'>Last Name:		</b><input type="text"		className="info" defaultValue={this.state.acct.lastName1}		name="LastName1"		/><br />
					<b className='line'>First Name:		</b><input type="text"		className="info" defaultValue={this.state.acct.firstName1}		name="FirstName1"		/><br />
					<b className='line'>Storage #:		</b><input type="text"		className="info" defaultValue={this.state.acct.storageNum}		name="StorageNum"		/><br />
					<b className='line'>Unit PH#:		</b><input type="text"		className="info" defaultValue={this.state.acct.contactNum1}		name="ContactNum1"		/><br />
					<b className='line'>Cell PH#:		</b><input type="text"		className="info" defaultValue={this.state.acct.contactNum2}		name="ContactNum2"		/><br />
					<b className='line'>Cell PH#:		</b><input type="text"		className="info" defaultValue={this.state.acct.contactNum3}		name="ContactNum3"		/><br />
					<b className='line'>Email :			</b><input type="text"		className="info" defaultValue={this.state.acct.email1}			name="Email1"			/><br />
					<b className='line'>Email :			</b><input type="text"		className="info" defaultValue={this.state.acct.email2}			name="Email2"			/><br />
					<b className='line'>Email :			</b><input type="text"		className="info" defaultValue={this.state.acct.email3}			name="Email3"			/><br />
					<b className='line'>Email :			</b><input type="text"		className="info" defaultValue={this.state.acct.email4}			name="Email4"			/><br />
					<b className='line'>Parking spot:	</b><input type="text"		className="info" defaultValue={this.state.acct.parkingSpot1}	name="ParkingSpot1"		/><br />
					<b className='line'>Parking spot:	</b><input type="text"		className="info" defaultValue={this.state.acct.parkingSpot2}	name="ParkingSpot2"		/><br />
				</div>
				<div className="form-group">
					<input type="submit" id="submitBut" className="btn btn-primary" value="Submit" />
				</div>
			</form>
			<button id="cancelBut" onClick={() => { window.location.reload(); }}>Cancel</button>
		</div>
		return(_Update);
	}
}