import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import serialize from 'form-serialize';
import Form from './Form';

const style = {
  height: 400,
  width: 400,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

class Login extends Component {

	login = (e) => {
		e.preventDefault()
		const { action } = this.props

		action.login(serialize(e.target, {hash: true}))
	}

	render(){
		
		const { login: { isLoading }, toss } = this.props
		
		return (
			<MuiThemeProvider>
			  	<div>
			  		<AppBar
					    title="Application Title"
					  />
			  		<br/><br/>
			  		<form onSubmit={this.login}>
						<div className="row">
							<div className="col-md-4 col-md-offset-4 text-center visible-md visible-lg">
								<Paper style={style} zDepth={5} circle={true}>
									<Subheader><h1>Log in</h1></Subheader>
									<br/><br/>
									<Form isLoading={isLoading}/>
								</Paper>
							</div>
							<div className="col-md-4 col-md-offset-4 text-center visible-xs visible-sm">
								<Subheader><h1>Log in</h1></Subheader>
								<br/><br/>
								<Form isLoading={isLoading}/>
							</div>
						</div>
					</form>
					<Snackbar open={toss.show} message={toss.message} autoHideDuration={4000}/>
			  	</div>
			</MuiThemeProvider>
			)
	}
} 
	
export default Login
