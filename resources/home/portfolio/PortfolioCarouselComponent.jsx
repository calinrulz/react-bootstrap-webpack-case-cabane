import React from 'react';

class PortfolioCarousel extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="">
              <div id="CabanePortCarousel" className="carousel slide">
                <ol className="carousel-indicators">
                  <li data-target="#CabanePortCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#CabanePortCarousel" data-slide-to="1"></li>
                  <li data-target="#CabanePortCarousel" data-slide-to="2"></li>
                </ol>

                {/* Carousel items */}
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="row-fluid">
                      <div className="col-md-3"><a href="#x" className="thumbnail"><img src="http://placehold.it/250x250" alt="Image" /></a></div>
                      <div className="col-md-3"><a href="#x" className="thumbnail"><img src="http://placehold.it/250x250" alt="Image" /></a></div>
                      <div className="col-md-3"><a href="#x" className="thumbnail"><img src="http://placehold.it/250x250" alt="Image" /></a></div>
                      <div className="col-md-3"><a href="#x" className="thumbnail"><img src="http://placehold.it/250x250" alt="Image" /></a></div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="row-fluid">
                      <div className="col-md-3"><a href="#x" className="thumbnail"><img src="http://placehold.it/250x250" alt="Image" /></a></div>
                      <div className="col-md-3"><a href="#x" className="thumbnail"><img src="http://placehold.it/250x250" alt="Image" /></a></div>
                      <div className="col-md-3"><a href="#x" className="thumbnail"><img src="http://placehold.it/250x250" alt="Image" /></a></div>
                      <div className="col-md-3"><a href="#x" className="thumbnail"><img src="http://placehold.it/250x250" alt="Image" /></a></div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="row-fluid">
                      <div className="col-md-3"><a href="#x" className="thumbnail"><img src="http://placehold.it/250x250" alt="Image" /></a></div>
                      <div className="col-md-3"><a href="#x" className="thumbnail"><img src="http://placehold.it/250x250" alt="Image" /></a></div>
                      <div className="col-md-3"><a href="#x" className="thumbnail"><img src="http://placehold.it/250x250" alt="Image" /></a></div>
                      <div className="col-md-3"><a href="#x" className="thumbnail"><img src="http://placehold.it/250x250" alt="Image" /></a></div>
                    </div>
                  </div>
                </div>

                <a className="left carousel-control" href="#CabanePortCarousel" data-slide="prev">‹</a>
                <a className="right carousel-control" href="#CabanePortCarousel" data-slide="next">›</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PortfolioCarousel;
