// 1. Create a github Repo or Click 'Fork' from the top menu and generate your own JSFiddle link.
// Be sure to click 'Update' when your work is done.
// 2. Create a Search Component for entering an Artist
// 3. On Search, make an api call to iTunes API to fetch the information about the artist
// API URL: https://itunes.apple.com/search?term=${ARTIST_NAME}
// 4. When the Search button is clicked, make a call to the API and display the list of albums, including the album name and album cover inside #albums-container in a grid. Use any CSS technique you are comfortable with (Note: The API will return a list of albums based on the search result. Use your skills to find out what the iTunes API data structure looks like and extract the relevant data from it).
// 5. Style the page to the best of the ability to make the UI look clean and presentable
// 6. Checkin or Click Update from the top Menu and save the link

import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
require('dotenv').config();

// Wrap our app container in a redux provider so it
// has access to the store.
const Index = () => {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
};

render(<Index />, document.getElementById('root'));
registerServiceWorker();
