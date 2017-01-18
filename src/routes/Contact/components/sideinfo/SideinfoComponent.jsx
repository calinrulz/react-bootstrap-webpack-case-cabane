import React from 'react';

// Component Styles
import './SideinfoComponent.scss';

class SideinfoComponent extends React.Component {
  render () {
    return (
      <div className="featured-box-container">
        <div className="boxed-content">
          <h4>De unde am pornit</h4>

          <ul className="thumbnail-gallery">
            {/* TODO: Display images dynamic */}
            <li>
              <a href="">
                <span className="thumbnail-image"><img src="" alt="" /></span>
              </a>
            </li>

            <li>
              <a href="">
                <span className="thumbnail-image"><img src="" alt="" /></span>
              </a>
            </li>

            <li>
              <a href="">
                <span className="thumbnail-image"><img src="" alt="" /></span>
              </a>
            </li>

            <li>
              <a href="">
                <span className="thumbnail-image"><img src="" alt="" /></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default SideinfoComponent;
