import React, { Component } from 'react';
import Header from './Header'
import PermitList from './PermitList'

import 'normalize.css'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      permits: []
    }
  }

  componentDidMount() {
    fetch('/permits.json')
      .then(res => res.json())
      .then(json => {
        this.setState({ permits: json.slice(0, 35) })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PermitList permits={this.state.permits} />
      </div>
    );
  }
}

export default App;
