import { connect } from 'react-redux';
import Results from '../components/Results';

/***
 * Container for results list.
 * Only mapped to isFetching and the destructured version
 * of the data returned from the iTunes API.
 ***********************************************************/

const mapStateToProps = state => ({
	isFetching: state.isFetching,
	resultCount: state.data.resultCount,
	exact: state.data.exact,
	similar: state.data.similar
});

export default connect(mapStateToProps, null)(Results);
