import React, { PureComponent } from 'react';
import './App.css';
import Search from './Search';
import Results from '../containers/ResultsContainer';

class App extends PureComponent {
	render() {
		return (
			<div className="App">
				{/* this.props.search provides the async function to fetch results */}
				<Search searchFunc={this.props.search} />
				<Results />
			</div>
		);
	}
}

export default App;
