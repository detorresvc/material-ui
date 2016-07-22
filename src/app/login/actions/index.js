import * as commonActions from '../../commonActions';
import * as apiErrorHelper from '../../apiErrorHelper';

const isLoading = (bool) => {
	return {
		type: 'IS_LOADING',
		bool
	}
}

const loggedIn = (bool) => {
	return {
		type: 'LOGGED_IN',
		bool
	}
} 

export const login = (payload) => {
	return (dispatch, getState, { api, batchActions }) => {
		dispatch(batchActions([commonActions.toss(false), isLoading(true)]))
		api.post('authenticate', payload)
			.then(res => {

				sessionStorage.setItem('token', res.data.token)
				location.href="/"
				dispatch(
					batchActions(
							[loggedIn(true), isLoading(false)]
						)
					)
			})
			.catch(err => {
				
				if(err.response.status == 401){
					dispatch(
						batchActions([
							commonActions.toss({
								message: err.response.data.message,
								show: true,
								type: 'danger' 
							}),
							isLoading(false)
						])
					)
				}

				if(err.response.status == 422){
					dispatch(
						batchActions([
							commonActions.toss({
								message: apiErrorHelper.getFirstErrorMessage(err.response.data.errors),
								show: true,
								type: 'danger' 
							}),
							isLoading(false)
						])
					)		
				}	
			})	
	}
}





