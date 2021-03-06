import React from 'react'

import BreadcrumbsComponent from '../../../components/Breadcrumbs/BreadcrumbsComponent'
import ContentComponent from './content/ContentComponent'

// Component Styles
import './AboutView.scss'

export const AboutView = () => (
  <div className='cabane-content-container'>
    <BreadcrumbsComponent breadcrumbName='Despre Noi' />
    <ContentComponent />
  </div>
)

export default AboutView
