import { connect } from 'react-redux';
import AboutView from '../components/AboutView';

const mapStateToProps = (state) => ({
  counter : state.counter
})

export default connect(mapStateToProps)(AboutView);   // ! connect needs (someFunction) and then (AboutView) !
