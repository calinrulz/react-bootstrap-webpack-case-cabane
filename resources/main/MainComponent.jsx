import React from 'react';
import NavigationComponent from '../navigation/MainNavigation';
import Carousel from '../home/carousel/CarouselComponent';
import Features from '../home/features/FeaturesComponent';
import About from '../home/about/AboutComponent';
import PortfolioShow from '../home/portfolio/PortfolioComponent';
import Newsfeed from '../home/newsfeed/NewsfeedComponent';
import Footer from '../footer/FooterComponent';

class MainComponent extends React.Component {
  render() {
    return (
      <div className="cabane-main-container">
        <NavigationComponent />

        <div className="cabane-carousel-container">
          <Carousel />
        </div>

        <div className="container">
          <Features />
        </div>

        <div className="container">
          <About />
        </div>

        <PortfolioShow />

        <Newsfeed />

        <Footer />
      </div>
    );
  }
};

export default MainComponent;
