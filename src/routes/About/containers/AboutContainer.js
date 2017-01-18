import { connect } from 'react-redux'
import AboutView from '../components/AboutView'

// const mapStateToProps = (state) => ({
//   counter : state.counter
// })

export default connect()(AboutView)   // ! connect needs (someFunction (ex: mapStateToProps)) and then (AboutView) !
