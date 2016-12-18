import React from 'react';
// import DuckImage from '../assets/Duck.jpg';
import './HomeView.scss';

import Carousel from '../components/carousel/CarouselComponent';
import Features from '../components/features/FeaturesComponent';
import About from '../components/about/AboutComponent';
import PortfolioShow from '../components/portfolio/PortfolioComponent';
import Newsfeed from '../components/newsfeed/NewsfeedComponent';

export const HomeView = () => (
  <div className="cabane-content-container">
    <Carousel />
    <Features />
    <About />
    <PortfolioShow />
    <Newsfeed />
  </div>
)

export default HomeView;
