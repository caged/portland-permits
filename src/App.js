import React, { Component } from 'react';
import { sluggify } from './utils'
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
        let permits = json.slice(0, 1500).map((v) => {
          v.nhid = sluggify(v.neighborhood)
          return v
        })

        const nhid = this.props.match.params.nhid
        if(nhid) {
          permits = permits.filter((p) => { return p.nhid === nhid })
        }
        this.setState({ permits: permits })
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
