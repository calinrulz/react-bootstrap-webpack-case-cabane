import React from 'react'
import { IndexLink, Link } from 'react-router'

// Assets
import AppLogo from '../../assets/logo.png'

// Component Styles
import './Footer.scss'

export const Footer = () => (
  <div className='cabane-footer-container'>
    <div className='container-fluid'>
      <div className='container'>
        <div className='row footer-sections-container'>
          <div className='col-md-3 newsletter-section'>
            <h5>Newsletter</h5>

            <p>
              Keep up on our always evolving product features and technology.
              Enter your e-mail and subscribe to our newsletter.
            </p>

            <div className='footer-news-contact'>
              <form className='form-inline'>
                <div className='form-group'>
                  <div className='input-group'>
                    <input type='text' className='form-control' id='newsfeed' placeholder='Adresa e-mail' />

                    <div className='input-group-addon'>
                      <a href='#' className=''>Trimite</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className='col-md-3 latest-tweet-section'>
            <h5>Ultimele Tweet-uri</h5>
          </div>

          <div className='col-md-3 contact-section'>
            <h5>Contact</h5>

            <div className='contact-info'>
              <p>
                <span className='glyphicon glyphicon-map-marker case-footer-glyphicon' aria-hidden='true' />
                <span><strong>Adresa:</strong> Str. Caselor, nr.12, Giurgiu, Romania</span>
              </p>

              <p>
                <span className='glyphicon glyphicon-phone case-footer-glyphicon' aria-hidden='true' />
                <span><strong>Telefon:</strong> (123) 456-789</span>
              </p>

              <p>
                <span className='glyphicon glyphicon-envelope case-footer-glyphicon' aria-hidden='true' />
                <span>
                  <strong>Email: </strong>
                  <a href='mailto:mail@example.com' target='_top'>
                    mail@example.com
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div className='col-md-3 social-section'>
            <h5>Urmareste-ne</h5>

            <div className='footer-social-buttons'>
              <a href='#' className='facebook-btn sm-global-btn' />
              <a href='#' className='twitter-btn sm-global-btn' />
              <a href='#' className='googleplus-btn sm-global-btn' />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='container footer-copywrite-container'>
      <div className='row'>
        <div className='footer-info'>
          <a className='footer-logo' href='#'>
            <img src={AppLogo} height='30' alt='React Case &amp; Cabane' />
          </a>

          <span className='copywrite'>&copy; 2017 by creativecalin.ro All Rights Reserved.</span>

          <span className='useful-links'>
            <IndexLink to='/'>Acasa</IndexLink><span> | </span>
            <Link to='/about'>Despre Noi</Link><span> | </span>
            <Link to='/sitemap'>Sitemap</Link><span> | </span>
            <Link to='/contact'>Contact</Link>
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
