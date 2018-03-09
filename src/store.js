import { createStore, applyMiddleware } from 'redux';
import search from './redux/reducers/search';
import thunk from 'redux-thunk';

const initalState = {
	isFetching: false,
	data: [],
	error: null
};

const store = createStore(search, initalState, applyMiddleware(thunk));

export default store;
