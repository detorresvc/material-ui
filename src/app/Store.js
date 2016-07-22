import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import {batchActions, enableBatching} from 'redux-batched-actions';
import axios from 'axios';

let api = axios.create({
    baseURL: 'http://api.edtr.dev/api/v1',
    timeout: 30000
})

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware.withExtraArgument({ api, batchActions })
)(createStore);

export default function configureStore(initialState = {}) {
    const store = createStoreWithMiddleware(enableBatching(rootReducer), initialState);

    return store;
}