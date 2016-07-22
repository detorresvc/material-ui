import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import { toss } from './commonReducers';
import { login } from './login/reducers';

const app = combineReducers({
    routing: routerReducer,
    toss,
    login
})

export default app;