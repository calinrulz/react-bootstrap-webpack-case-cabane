import React from 'react'
import { Header } from 'components/Header/Header'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  describe('Navigation links...', () => {
    it('Should render a Link to Acasa route', () => {
      expect(_wrapper.contains(
        <IndexLink activeClassName='active' to='/'>
          Acasa
        </IndexLink>
      )).to.be.true
    })

    it('Should render a Link to Despre Noi route', () => {
      expect(_wrapper.contains(
        <Link activeClassName='active' to='/about'>
          Despre Noi
        </Link>
      )).to.be.true
    })

    it('Should render a Link to Contact route', () => {
      expect(_wrapper.contains(
        <Link activeClassName='active' to='/contact'>
          Contact
        </Link>
      )).to.be.true
    })
  })
})
