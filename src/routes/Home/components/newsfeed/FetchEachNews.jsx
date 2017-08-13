import React from 'react'
import axios from 'axios'

// Firebase
import * as firebase from 'firebase'

class FetchEachComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      speed: 10,
      imagePath: ''
    }
  }

  componentDidMount () {
    const rootRef = firebase.database().ref()
    const speedRef = rootRef.child('speed')
    const imageRef = rootRef.child('imageRef').child('url')

    speedRef.on('value', (snap) => {
      console.log(snap.val())

      this.setState({
        speed: snap.val()
      })
    })

    imageRef.on('value', (snap) => {
      console.log(snap.val())

      this.setState({
        imagePath: snap.val()
      })
    })
  }

  render () {
    return (
      <div>
        <h1>{this.state.speed}</h1>

        <div>
          { this.state.imagePath &&
            Object.keys(this.state.imagePath).map((key, index) => {
              return (
                <div key={index}>
                  <img src={this.state.imagePath[key]} alt="" className="uploaded-image" />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default FetchEachComponent
