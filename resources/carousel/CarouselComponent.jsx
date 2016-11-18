import React from 'react';

class Carousel extends React.Component {
  render () {
    return (
      <div id="carousel-example-generic" className="carousel slide cabane-main-slider" data-ride="carousel">
        {/* Wrapper for slides */}
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="http://www.planwallpaper.com/static/images/beautiful-sunset-images-196063.jpg" alt="..." />
            <div className="carousel-caption">
              ...
            </div>
          </div>
          <div className="item">
            <img src="http://www.planwallpaper.com/static/images/beautiful-sunset-images-196063.jpg" alt="..." />
            <div className="carousel-caption">
              ...
            </div>
          </div>
        </div>

        {/* Controls */}
        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>
      </div>
    );
  }
};

export default Carousel;
