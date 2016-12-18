import React from 'react';

class EachNews extends React.Component {
  render() {
    return (
      <div className="col-md-6 latest-newsfeed-date-container">
        <div className="row">
          <div className="date-container">
            <span className="day-container">15</span>
            <span className="month-container">Ian</span>
          </div>

          <div className="text-container-top">
            <a href="#">Lorem ipsum dolor sit amet, lectus urna platea mi nullam. Montes nam neque dis odio justo elementum. Lorem ipsum dolor sit amet, lectus urna platea mi nullam.</a>
          </div>
        </div>

        <div className="row">
          <div className="text-container-bottom">
            <p>Lorem ipsum dolor sit amet, lectus urna platea mi nullam. Montes nam neque dis odio justo elementum.</p>
          </div>
        </div>
      </div>
    );
  }
};

export default EachNews;
