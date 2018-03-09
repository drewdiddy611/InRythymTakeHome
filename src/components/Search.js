import React, { PureComponent } from 'react';
import {
	Form,
	FormGroup,
	InputGroup,
	InputGroupAddon,
	Input
} from 'reactstrap';

export default class Search extends PureComponent {
	onSubmit = e => {
		e.preventDefault();
		// Reference our form and input.
		const form = e.target;
		const input = form.querySelector('input');

		// Get the value and call our search function.
		if (this.props.searchFunc) {
			this.props.searchFunc(input.value);
		}
	};

	render() {
		return (
			<header className="App-header">
				<h1 className="App-title">iSearch</h1>
				<Form onSubmit={this.onSubmit}>
					<FormGroup>
						<InputGroup>
							<InputGroupAddon addonType="prepend">Search</InputGroupAddon>
							<Input placeholder="Album Name (hit enter to search)" />
						</InputGroup>
					</FormGroup>
				</Form>
			</header>
		);
	}
}
