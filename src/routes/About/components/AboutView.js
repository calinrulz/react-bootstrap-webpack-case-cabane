import React from 'react';

import BreadcrumbsComponent from './breadcrumbs/BreadcrumbsComponent';
import ContentComponent from './content/ContentComponent';

// Component Styles
import './AboutView.scss';

export const AboutView = () => (
  <div className="cabane-content-container">
    <BreadcrumbsComponent />
    <ContentComponent />
  </div>
)

export default AboutView;
