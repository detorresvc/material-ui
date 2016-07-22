import { Map, fromJS } from 'immutable';

const INIT_TOSS_STATE = Map({
	show: false,
	message: '',
	type: 'default'
})

export const toss =  (state = INIT_TOSS_STATE, action) => {
	switch(action.type){
		case 'ON_TOSS':
			return state.merge(typeof(action.data) == 'boolean' && action.data == false ? INIT_TOSS_STATE : fromJS(action.data)) 
		default:
			return state

	}
}