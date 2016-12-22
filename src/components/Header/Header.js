import React from 'react';
import { IndexLink, Link } from 'react-router';

// Assets
import AppLogo from '../../assets/logo.png';

// Component Styles
import './Header.scss';

export const Header = () => (
  <nav className="navbar navbar-default navbar-fixed-top cabane-nav-container">
    <div className="container nav-container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>

        <IndexLink to="/" className="navbar-brand">
          <img src={AppLogo} width="60" alt="React Case &amp; Cabane" />
        </IndexLink>
      </div>

      <div className="case-extra-nav-container">
        <ul className="extra-links">
          <li className="">
            <span className="glyphicon glyphicon-chevron-right glyphicon-right-arrow"></span>
            <Link to="/about">Despre Noi</Link>
          </li>

          <li className="">
            <span className="glyphicon glyphicon-chevron-right glyphicon-right-arrow"></span>
            <Link to="/contact">Contact</Link>
          </li>

          <li className="case-nav-phone">
            <span className="glyphicon glyphicon-phone glyphicon-right-arrow"></span>
            <span className="case-phone-number">(123) 456 789</span>
          </li>
        </ul>

        <form className="case-navbar-search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Cauta..." />
            <span className="glyphicon glyphicon-search case-glyphicon-search"></span>
          </div>
        </form>
      </div>

      <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right cabane-nav-links">
          <li className="active">
            <IndexLink to="/">
              Acasa
            </IndexLink>
          </li>

          <li className="">
            <Link to="/about">
              Despre Noi
            </Link>
          </li>

          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Modele <span className="caret"></span></a>

            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
          <li className=""><a href="#">Portofoliu</a></li>
          <li className=""><a href="#">Produse</a></li>
          <li className=""><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header;
