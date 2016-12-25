import React from 'react';

// Component Styles
import './BreadcrumbsComponent.scss';

class BreadcrumbsComponent extends React.Component {
  render () {
    return (
      <div className="cabane-breadcrumbs-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumbs-links">
                <ol className="breadcrumb">
                  <li className="non-active-links"><a href="#">Home</a></li>
                  <li className="active">Despre Noi</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumbs-page-name">
                {/* TODO: Add dynamic page names */}
                <h3>Despre Noi</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default BreadcrumbsComponent;
