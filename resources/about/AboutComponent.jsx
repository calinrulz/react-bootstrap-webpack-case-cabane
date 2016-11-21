import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="row case-about-container">
        <div className="col-xs-12 col-sm-6 col-md-8 about-bullets">
          <h3>Despre <span className="bold-text">Noi</span></h3>

          <div className="row about-features-container">
            <div className="col-md-6 about-features-left-container">
              <ul className="about-features-left">
                <li>
                  <p>Customer Support</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </li>

                <li>
                  <p>Customer Support</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </li>
              </ul>
            </div>

            <div className="col-md-6 about-features-right-container">
              <ul className="about-features-right">
                <li>
                  <p>Customer Support</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </li>

                <li>
                  <p>Customer Support</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xs-6 col-md-4 about-more">

        </div>
      </div>
    );
  }
};

export default About;
