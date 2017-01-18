import { connect } from 'react-redux'
import ContactView from '../components/ContactView'

// const mapStateToProps = (state) => ({
//   counter : state.counter
// })

export default connect()(ContactView)   // ! connect needs (someFunction (ex: mapStateToProps)) and then (ContactView) !
