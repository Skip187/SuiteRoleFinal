import React, { Component } from 'react';

const _MenuURL = 'https://localhost:5001/Residents';

export default class _Create extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = 	{
							acct: 
									{
										acctOwner:	" ",
										unitNum:	" ",
										lastName1:	" ",
										firstName1:	" ",
										storageNum:	" ",
										contactNum1:" ",
										contactNum2:" ",
										contactNum3:" ",
										email1:		" ",
										email2:		" ",
										email3:		" ",
										email4:		" ",
										parkingSpot1:" ",
										parkingSpot2:" "
									}
						};

		this._onSubmit = this.AcctBuilder.bind(this);	// I purposely bound the function and listener with different names. Because I could.
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e) 
	{
		//All this does, is make React STFU.
	}

	// This is onSubmit, I'm just being a douche about naming things now.
	AcctBuilder(e)
	{
		e.preventDefault();
		const _form = e.target;
		const _data = new FormData(_form);

		this.SendDetails(_data);
	}


//#region Send Details
	SendDetails = (_FormData) => 
	{
		console.error(_FormData);
		//Get a JSON List from the server
		fetch(_MenuURL+"/Create/", 
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
	
	render()
	{
		_Create =
		<div id='ResDet'>
			<form onSubmit={this._onSubmit}>
				<div className="form-group">
					<b className='line'>Owner:			</b><input type="text"		className="info"	name="AcctOwner"	onChange={this.handleInputChange}	/><br />
					<b className='line'>Unit Number:	</b><input type="text"		className="info"	name="UnitNum"		onChange={this.handleInputChange}	/><br />
					<b className='line'>Last Name:		</b><input type="text"		className="info"	name="LastName1"	onChange={this.handleInputChange}	/><br />
					<b className='line'>First Name:		</b><input type="text"		className="info"	name="FirstName1"	onChange={this.handleInputChange}	/><br />
					<b className='line'>Storage #:		</b><input type="text"		className="info"	name="StorageNum"	onChange={this.handleInputChange}	/><br />
					<b className='line'>Unit Ph#:		</b><input type="text"		className="info"	name="ContactNum1"	onChange={this.handleInputChange}	/><br />
					<b className='line'>Cell Ph#:		</b><input type="text"		className="info"	name="ContactNum2"	onChange={this.handleInputChange}	/><br />
					<b className='line'>Cell Ph#		</b><input type="text"		className="info"	name="ContactNum3"	onChange={this.handleInputChange}	/><br />
					<b className='line'>Email :			</b><input type="text"		className="info"	name="Email1"		onChange={this.handleInputChange}	/><br />
					<b className='line'>Email :			</b><input type="text"		className="info"	name="Email2"		onChange={this.handleInputChange}	/><br />
					<b className='line'>Email :			</b><input type="text"		className="info"	name="Email3"		onChange={this.handleInputChange}	/><br />
					<b className='line'>Email :			</b><input type="text"		className="info"	name="Email4"		onChange={this.handleInputChange}	/><br />
					<b className='line'>Parking spot:	</b><input type="text"		className="info"	name="ParkingSpot1"	onChange={this.handleInputChange}	/><br />
					<b className='line'>Parking spot:	</b><input type="text"		className="info"	name="ParkingSpot2"	onChange={this.handleInputChange}	/><br />
				</div>
				<div className="form-group">
					<input type="submit" id="submitBut" className="btn btn-primary" value="Submit" /> 
				</div>
				
			</form>
			<button id="cancelBut" onClick={() => { window.location.reload(); }}>Cancel</button>
		</div>
		return(_Create);
	}
}