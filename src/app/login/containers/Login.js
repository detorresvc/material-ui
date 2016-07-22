import React, { Component } from 'react';
import Login from '../components/Login';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

export default connect(
	state => {
		
		const login = state.login.toJS()
		const toss = state.toss.toJS()
		
		return {
			login,
			toss
		}
	},
	dispatch => {
		return {
			action: bindActionCreators(actions, dispatch)
		}
	}
)(Login)