import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Component Styles
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='cabane-main-container'>
    <Header />

    {children}

    <Footer />
  </div>
)

CoreLayout.PropTypes = {
  children : React.PropTypes.element.isRequired
  // children: React.PropTypes.node
  // children: React.PropTypes.oneOfType([
  //   React.PropTypes.arrayOf(React.PropTypes.node),
  //   React.PropTypes.node
  // ])
}

export default CoreLayout
