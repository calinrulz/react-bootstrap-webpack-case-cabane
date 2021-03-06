import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'portfolio',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Portfolio = require('./containers/PortfolioContainer').default
      const reducer = require('./modules/portfolio').default

      /*  Add the reducer to the store on key 'portfolio'  */
      injectReducer(store, { key: 'portfolio', reducer })

      /*  Return getComponent   */
      cb(null, Portfolio)

    /* Webpack named bundle   */
    }, 'portfolio')
  }
})
