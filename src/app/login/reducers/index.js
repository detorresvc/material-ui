
import { Map } from 'immutable';

const INIT_STATE = Map({
	isLoading: false,
	isLoggedIn: false
})

export const login = (state = INIT_STATE, action) => {
	switch(action.type){
		case 'IS_LOADING':
			return state.set('isLoading', action.bool)
		case 'LOGGED_IN':
			return state.set('isLoggedIn', action.bool)
		default:
			return state
	}
}