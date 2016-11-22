import React from 'react';
import Carousel from '../home/carousel/CarouselComponent';
import Features from '../home/features/FeaturesComponent';
import About from '../home/about/AboutComponent';
import PortfolioShow from '../home/portfolio/PortfolioComponent';

class MainComponent extends React.Component {
  render() {
    return (
      <div className="cabane-main-container">
        <div className="cabane-carousel-container">
          <Carousel />
        </div>

        <div className="container">
          <Features />
        </div>

        <div className="container">
          <About />
        </div>

        <div className="container">
          <PortfolioShow />
        </div>
      </div>
    );
  }
};

export default MainComponent;
