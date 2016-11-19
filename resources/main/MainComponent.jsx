import React from 'react';
import Carousel from '../carousel/CarouselComponent';

class MainComponent extends React.Component {
  render() {
    return (
      <div className="cabane-main-container">
        <div className="cabane-carousel-container">
          <Carousel />
        </div>

        <div className="container">
          <div className="jumbotron">
            <h1>Hello, {this.props.name}!</h1>
            <p>You are ready to develop!</p>
          </div>
        </div>
      </div>
    );
  }
};

export default MainComponent;
