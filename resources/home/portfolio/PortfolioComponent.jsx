import React from 'react';
import PortfolioCarousel from './PortfolioCarouselComponent';

class PortfolioShow extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row cabane-portfolio-show-container">
            <div className="text-center cabane-features-text">
              <h3>We are not the only one <span className="bold-text">exited</span> about Case &amp; Cabane...</h3>
              <p className="portfolio-show-orange-txt">
                Over 5,000 users are enjoing Case &amp; Cabane.
              </p>
            </div>
          </div>
        </div>

        <div className="row cabane-portfolio-carousel-component">
          <PortfolioCarousel />
        </div>
      </div>
    );
  }
};

export default PortfolioShow;
