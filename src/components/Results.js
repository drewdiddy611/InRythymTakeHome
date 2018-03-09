import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ResultsGrid from './ResultsGrid';
import ReactLoading from 'react-loading';

const NoResults = () => {
	return (
		<Row className="main">
			<Col xs="12">
				<h3>No results found. Refine your search and try again.</h3>
			</Col>
		</Row>
	);
};

const Loading = ({ type, color }) => (
	<div style={{ width: '40%', margin: 'auto', textAlign: 'center' }}>
		<ReactLoading type={type} color={color} height="200" width="200" />
	</div>
);

export default class Results extends PureComponent {
	render() {
		const { isFetching, resultCount, exact, similar } = this.props;

		if (isFetching) return <Loading type="cylon" color="#ccc" />;
		if (!resultCount) return <NoResults />;

		return (
			<Container className="container main">
				<Row>
					<Col xs="12">
						<h1>Results</h1>
						<hr />
					</Col>
				</Row>

				<ResultsGrid prefix="Exact" albums={exact} />
				<hr />
				<ResultsGrid prefix="Similar" albums={similar} />
			</Container>
		);
	}
}
