import { connect } from 'react-redux'
import PortfolioView from '../components/PortfolioView'

// const mapStateToProps = (state) => ({
//   counter : state.counter
// })

export default connect()(PortfolioView) // ! connect needs (someFunction (ex: mapStateToProps)) and then (ContactView)!
