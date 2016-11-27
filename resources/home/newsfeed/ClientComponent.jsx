import React from 'react';

class ClientFeed extends React.Component {
  render() {
    return (
      <div className="carousel slide" data-ride="carousel" id="quote-carousel">
        <ol className="carousel-indicators">
          <li data-target="#quote-carousel" data-slide-to="0" className="active"></li>
          <li data-target="#quote-carousel" data-slide-to="1"></li>
          <li data-target="#quote-carousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner testimonial-clients-container">
          <div className="item active">
            <div className="row">
              <div className="col-sm-12 testimonial-text-container">
                <p>&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.&rdquo;</p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 testimonial-image-container">
                <small><strong>Calin Georgescu, CEO</strong></small>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="row">
              <div className="col-sm-12 testimonial-text-container">
                <p>&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.&rdquo;</p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 testimonial-image-container">
                <small><strong>Calin Georgescu, CEO</strong></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ClientFeed;
