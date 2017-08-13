import React from 'react'
import * as firebase from 'firebase'

import './ContentComponent.scss'

class ContentComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      imagePath: ''
    }
  }

  componentDidMount () {
    const rootRef = firebase.database().ref()
    const imageRef = rootRef.child('imageRef').child('url')

    imageRef.on('value', (snap) => {
      console.log(snap.val())

      this.setState({
        imagePath: snap.val()
      })
    })
  }

  render () {
    return (
      <div className='cabane-portfolio-container'>
        <div className='container'>
          <div className='row'>
            { this.state.imagePath &&
              Object.keys(this.state.imagePath).map((key, index) => {
                return (
                  <div className='col-md-4' key={index}>
                    <img src={this.state.imagePath[key]} alt='' className='img-thumbnail uploaded-image' />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ContentComponent
