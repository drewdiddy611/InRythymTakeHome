import { connect } from 'react-redux';
import App from '../components/App.js';
import search from '../redux/actions/search';

const mapDispatchToProps = dispatch => ({
	search: term => {
		dispatch(search(term));
	}
});

export default connect(state => state, mapDispatchToProps)(App);
