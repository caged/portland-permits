import React, { Component } from 'react';
import './Permit.css';

class Permit extends Component {
  render() {
    const {details, index} = this.props
    return (
      <div className="row permit">
        <div className="title cell">{ details.work || details.type || 'N/A' }</div>
        <div className="address cell">{ details.address }</div>
        <div className="description cell">{ details.description }</div>
        <div className="date cell">{ details.issued.split(' ')[0] }</div>
      </div>
    );
  }
}

export default Permit;
