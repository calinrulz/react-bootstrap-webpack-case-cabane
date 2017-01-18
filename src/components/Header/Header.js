import React from 'react'
import { IndexLink, Link } from 'react-router'

// Assets
import AppLogo from '../../assets/logo.png'

// Component Styles
import './Header.scss'

export const Header = () => (
  <nav className='navbar navbar-default navbar-fixed-top cabane-nav-container'>
    <div className='container nav-container'>
      <div className='navbar-header'>
        <button type='button'
          className='navbar-toggle collapsed'
          data-toggle='collapse'
          data-target='#navbar'
          aria-expanded='false'
          aria-controls='navbar'
        >
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>

        <IndexLink to='/' className='navbar-brand' activeClassName='active'>
          <img src={AppLogo} width='60' alt='React Case &amp; Cabane' />
        </IndexLink>
      </div>

      <div className='case-extra-nav-container'>
        <ul className='extra-links'>
          <li className=''>
            <span className='glyphicon glyphicon-chevron-right glyphicon-right-arrow' />
            <Link to='/about' activeClassName='active'>Despre Noi</Link>
          </li>

          <li className=''>
            <span className='glyphicon glyphicon-chevron-right glyphicon-right-arrow' />
            <Link to='/contact' activeClassName='active'>Contact</Link>
          </li>

          <li className='case-nav-phone'>
            <span className='glyphicon glyphicon-phone glyphicon-right-arrow' />
            <span className='case-phone-number'>(123) 456 789</span>
          </li>
        </ul>

        <form className='case-navbar-search'>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Cauta...' />
            <span className='glyphicon glyphicon-search case-glyphicon-search' />
          </div>
        </form>
      </div>

      <div id='navbar' className='collapse navbar-collapse'>
        <ul className='nav navbar-nav navbar-right cabane-nav-links'>
          <li>
            <IndexLink to='/' activeClassName='active'>
              Acasa
            </IndexLink>
          </li>

          <li>
            <Link to='/about' activeClassName='active'>
              Despre Noi
            </Link>
          </li>

          <li className='dropdown'>
            <a href='#'
              className='dropdown-toggle'
              data-toggle='dropdown'
              role='button'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Modele <span className='caret' />
            </a>

            <ul className='dropdown-menu'>
              <li><a href='#'>Action</a></li>
              <li><a href='#'>Another action</a></li>
              <li><a href='#'>Something else here</a></li>
              <li role='separator' className='divider' />
              <li><a href='#'>Separated link</a></li>
            </ul>
          </li>
          <li><a href='#'>Portofoliu</a></li>
          <li><a href='#'>Produse</a></li>
          <li>
            <Link to='/contact' activeClassName='active'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
