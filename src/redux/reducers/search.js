import {
	SEARCH_START,
	SEARCH_SUCCESS,
	SEARCH_FAILURE
} from '../actions/search';

const search = (state, action) => {
	switch (action.type) {
		case SEARCH_START:
			return {
				...state,
				isFetching: true
			};
		case SEARCH_SUCCESS:
			return {
				...state,
				isFetching: false,
				data: action.data
			};
		case SEARCH_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
};

export default search;
