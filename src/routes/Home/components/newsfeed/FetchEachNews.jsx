import React from 'react';
import axios from 'axios';

class FetchEachComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.props.username}`)
      .then(res => {
        const posts = res.data;

        this.setState({ posts });
      });
  }

  render () {
    return(
      <div>
        <h1>{this.props.username}</h1>
        <ul>
          <li key={this.state.posts.id}>{this.state.posts.name}</li>
        </ul>
      </div>
    );
  }
};

export default FetchEachComponent;
