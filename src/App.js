import React, { Component } from 'react';
import Header from './Header'
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
        this.setState({ permits: json })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
