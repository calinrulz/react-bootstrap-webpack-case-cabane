import React from 'react';
import Carousel from '../carousel/CarouselComponent';
import Features from '../features/FeaturesComponent';

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
      </div>
    );
  }
};

export default MainComponent;
