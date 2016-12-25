import React from 'react';

// Component Styles
import './ContentComponent.scss';

class ContentComponent extends React.Component {
  render () {
    return (
      <div className="cabane-about-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Some awesome animations! <span className="animation-text">look at this</span></h3>
            </div>

            <div className="col-md-12">
              <hr className="tall" />
            </div>
          </div>

          <div className="row about-us-section">
            <div className="col-md-8">
              <h3><span className="bold-text">Cine</span> suntem noi</h3>

              <div className="about-us-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur pellentesque neque eget diam posuere porta.
                  Quisque ut nulla at nunc vehicula lacinia.
                  Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet.
                  In eu justo a felis faucibus ornare vel id metus.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                  In eu libero ligula. Fusce eget metus lorem, ac viverra leo.
                  Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem.
                  Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.
                </p>

                <p>Curabitur pellentesque neque eget diam posuere porta.
                  Quisque ut nulla at nunc vehicula lacinia.
                  Proin adipiscing porta tellus, ut feugiat nibh adipiscing metus sit amet.
                  In eu justo a felis faucibus ornare vel id metus.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                  In eu libero ligula. Fusce eget metus lorem, ac viverra leo.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                  In eu libero ligula. Fusce eget metus lorem, ac viverra leo.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula.
                </p>
              </div>
            </div>

            <div className="col-md-4">

            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <hr className="tall" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ContentComponent;
