import React, { PureComponent } from 'react';
import './App.css';
import Search from './Search';

class App extends PureComponent {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">iSearch</h1>
					{/* this.props.search provides the async function to fetch results */}
					<Search searchFunc={this.props.search} />
				</header>
			</div>
		);
	}
}

export default App;
