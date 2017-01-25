import React from 'react'
import axios from 'axios'

// Firebase
import * as firebase from 'firebase'

class FetchEachComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      speed: 10
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref()
    const speedRef = rootRef.child('speed')

    speedRef.on('value', snap => {
      console.log(snap.val())
      
      this.setState({
        speed: snap.val()
      })
    })
  }

  render () {
    return(
      <div>
        <h1>{this.state.speed}</h1>
      </div>
    )
  }
}

export default FetchEachComponent
