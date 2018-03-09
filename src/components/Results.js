import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ResultsGrid from './ResultsGrid';

const NoResults = () => {
	return (
		<Row className="main">
			<Col xs="12">
				<h3>No results found. Refine your search and try again.</h3>
			</Col>
		</Row>
	);
};

export default class Results extends PureComponent {
	render() {
		const { resultCount, exact, similar } = this.props;

		if (!resultCount) return <NoResults />;

		return (
			<Container className="container main">
				<Row>
					<Col xs="12">
						<h1>Results</h1>
						<hr />
					</Col>
				</Row>

				<ResultsGrid prefix="Exact" items={exact} />
				<hr />
				<ResultsGrid prefix="Similar" items={similar} />
			</Container>
		);
	}
}
