import React, { Component } from 'react';
import PermitIcon from './PermitIcon';

import './Permit.css';

class Permit extends Component {
  render() {
    const {details} = this.props
    const title = details.work || details.type
    const desc = details.description
    const category = PermitIcon.getNormalizedClassificationForTitle(title)
    const titleClasses = `title cell ${category}`
    const addressLink = `https://maps.google.com/?q=${details.address}`
    // const tcDescription = `${desc[0].charAt(0).toUpperCase()}${desc[1].slice(1)}`
    return (
      <div className="row permit">
        <div className="cell"><PermitIcon title={title} /></div>
        <div className={titleClasses}>{ details.work || details.type || 'N/A' }</div>
        <div className="address cell">
          <a href={addressLink}>{ details.address }</a>
        </div>
        <div className="description cell">{ details.description }</div>
        <div className="cell">{ details.neighborhood }</div>
        <div className="date cell">{ details.issued.split(' ')[0] }</div>
      </div>
    );
  }
}

export default Permit;
