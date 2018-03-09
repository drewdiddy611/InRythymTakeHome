import {
	SEARCH_START,
	SEARCH_SUCCESS,
	SEARCH_FAILURE
} from '../actions/search';

const search = (state, action) => {
	switch (action.type) {
		case SEARCH_START:
			// Start of the async search call, tell
			// the app that we're fetching data.
			return {
				...state,
				isFetching: true
			};
		case SEARCH_SUCCESS:
			/***
			 * The request was successful and the
			 * returned object structure is as follows:
			 * {
			 * 		resultCount: Number,
			 *		exact: Array, List of exact search term matches
			 *		similar: Array, List of similar search term matches
			 * }
			 ***********************************************************/
			return {
				...state,
				isFetching: false,
				data: action.data
			};
		case SEARCH_FAILURE:
			// The search failed, update our error so
			// it can be displayed to the user.
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			// Nothing to see here.
			return state;
	}
};

export default search;
