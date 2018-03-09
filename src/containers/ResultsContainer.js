import { connect } from 'react-redux';
import Results from '../components/Results';

const mapStateToProps = state => ({
	resultCount: state.data.resultCount,
	exact: state.data.exact,
	similar: state.data.similar
});

export default connect(mapStateToProps, null)(Results);
