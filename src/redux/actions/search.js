// API URL: https://itunes.apple.com/search?term=${ARTIST_NAME}
export const SEARCH_API_URL =
	'https://itunes.apple.com/search?media=music&entity=album&term=';
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
	if (!search) {
		return dispatch(searchFailure({ message: 'No search term provided.' }));
	}

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
		// Send the request and extract our data from the response.
		const response = await fetch(SEARCH_API_URL + search, options);

		// Request success
		if (response.ok) {
			const data = await response.json();
			const results = {
				resultCount: data.resultCount
			};

			// Separate exact matches from similar ones.
			const [exact, similar] = data.results.reduce(
				(acc, el) => {
					if (el.artistName === search) {
						acc[0].push(el);
					} else {
						acc[1].push(el);
					}
					return acc;
				},
				[[], []]
			);

			results.exact = exact;
			results.similar = similar;

			// Forward the results to our reudcer.
			dispatch(searchSuccess(results));
		}
	} catch (err) {
		dispatch(searchFailure(err));
	}
};
