import React, { Component } from 'react';

class Permit extends Component {
  render() {
    const {details, index} = this.props
    console.log(details);
    return (
      <div className="permit">
        <h4>{ details.work }</h4>
        <div className="description">{ details.description }</div>
      </div>
    );
  }
}

export default Permit;
