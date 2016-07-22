import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default (props) => 
	<div className="row">
		<div className="cold-md-12">
			<TextField
			      hintText="Input Email"
			      floatingLabelText="Email"
			      floatingLabelFixed={false}
			      name="email"
			    />
		</div>
		<div className="cold-md-12">
			<TextField
			      hintText="Input Password"
			      floatingLabelText="Password"
			      floatingLabelFixed={false}
			      type="password"
			      name="password"
			    />
		</div>
		<div className="cold-md-12 text-center">
			<RaisedButton 
				disabled={props.isLoading}
				type="submit" 
				label="Login" 
				primary={true} 
				style={{margin: 12}}
				icon={props.isLoading ? <i className="fa fa-circle-o-notch fa-spin" /> : null} />
		</div>
	</div>