import React from 'react';
import {
	Row,
	Col,
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardSubtitle
} from 'reactstrap';

const AttributeRow = ({ left, right }) => {
	return (
		<Row>
			<Col xs="6" className="attribute-name">
				{left}
			</Col>
			<Col xs="6">{right}</Col>
		</Row>
	);
};

export default ({ prefix, items }) => {
	return [
		<Row key={`${prefix}-items-header`}>
			<Col xs="2">
				<h3>{prefix}</h3>
			</Col>
		</Row>,
		<Row key={`${prefix}-items-list`}>
			{items.map(album => {
				return (
					<Col
						key={album.collectionName + album.collectionId}
						className="album-card"
						xs="3">
						<Card>
							<CardImg
								top
								src={album.artworkUrl100}
								alt={album.collectionName}
							/>
							<CardBody>
								<CardTitle>
									<a target="_blank" href={album.collectionViewUrl}>
										{album.collectionName}{' '}
									</a>
								</CardTitle>
								<CardSubtitle>
									<a target="_blank" href={album.artistViewUrl}>
										{album.artistName}
									</a>
								</CardSubtitle>
								<div className="attributes">
									<AttributeRow
										left="Release Date:"
										right={new Date(album.releaseDate).toLocaleDateString()}
									/>
									<AttributeRow left="Genre" right={album.primaryGenreName} />
								</div>
							</CardBody>
						</Card>
					</Col>
				);
			})}
		</Row>
	];
};
