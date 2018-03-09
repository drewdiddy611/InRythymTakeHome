import React, { PureComponent } from 'react';
import './App.css';
import Search from './Search';
import Results from '../containers/ResultsContainer';

/***
 * Presentational component for entire application.
 * Contains all necessary components for the app's interface.
 ***********************************************************/
class App extends PureComponent {
	render() {
		return (
			<div className="App">
				{/* this.props.search provides the async action to fetch results */}
				<Search searchFunc={this.props.search} />

				{/* Results container linked to redux store */}
				<Results />
			</div>
		);
	}
}

export default App;
