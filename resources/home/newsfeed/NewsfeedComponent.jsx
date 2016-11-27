import React from 'react';
import EachNews from './NewsComponent';

class Newsfeed extends React.Component {
  render() {
    return (
      <div className="container-fluid cabane-home-newsfeed-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Ultimele <span className="bold-text">Noutati</span></h3>

              <div className="row">
                <div className="latest-newsfeed-container">
                  {/* TODO: Create dynamic displays */}
                  <EachNews />

                  <EachNews />
                </div>
              </div>

              <div className="read-more-button">
                <form className="form-inline">
                  <div className="form-group">
                    <input type="text" className="form-control" id="subscribe" placeholder="Inscrie-te" />
                  </div>
                  <button type="submit" className="btn btn-success btn-sm">Inscrie-te</button>
                </form>
              </div>
            </div>

            <div className="col-md-6">
              <h3>Ce spun <span className="bold-text">Clientii</span></h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Newsfeed;
