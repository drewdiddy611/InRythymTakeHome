// API URL: https://itunes.apple.com/search?term=${ARTIST_NAME}
export const SEARCH_API_URL = 'https://itunes.apple.com/search?term=';
export const SEARCH_START = 'SEARCH_START';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

/*
 * Action creators for different search "states."
 */
export const searchStart = () => ({
	type: SEARCH_START
});

export const searchSuccess = data => ({
	type: SEARCH_SUCCESS,
	data
});

export const searchFailure = err => ({
	type: SEARCH_FAILURE,
	err
});

/*
 * Main async actions to be called from UI.
 */
export default search => async dispatch => {
	// Update the state to searching, can look for isFetching: true
	// for displaying a progress spinner.
	dispatch(searchStart());

	const options = {
		method: 'GET',
		cors: true, // allow cross-origin HTTP request
		credentials: 'same-origin' // This is similar to XHR’s withCredentials flag
	};

	// SEND REQUEST
	try {
		const response = await fetch(SEARCH_API_URL, options);

		// Request success, forward the results to our reducer.
		if (response.ok) {
			dispatch(searchSuccess(await response.json()));
		}
	} catch (err) {
		dispatch(searchFailure(err));
	}
};
