import React from 'react'

import BreadcrumbsComponent from '../../../components/Breadcrumbs/BreadcrumbsComponent'
import ContentComponent from './content/ContentComponent'

// Component Styles
import './ContactView.scss'

export const ContactView = () => (
  <div className='cabane-content-container'>
    <BreadcrumbsComponent breadcrumbName='Contact' />
    <ContentComponent />
  </div>
)

export default ContactView
