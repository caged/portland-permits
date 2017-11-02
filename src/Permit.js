import React, { Component } from 'react';
import PermitIcon from './PermitIcon';
import { Link } from 'react-router-dom'
import { naiveTitleCaseParagraph, shortName } from './utils'

import './Permit.css';

class Permit extends Component {
  render() {
    const {details} = this.props
    const title = details.work || details.type
    const category = PermitIcon.getNormalizedClassificationForTitle(title)
    const titleClasses = `title cell ${category}`
    const addressLink = `https://maps.google.com/?q=${details.address}`
    const linkPath = `/neighborhood/${details.nhid}`
    return (
      <div className="row permit">
        <div className="cell"><PermitIcon title={title} /></div>
        <div className={titleClasses}>{ details.work || details.type || 'N/A' }</div>
        <div className="address cell">
          <a href={addressLink}>{ details.address }</a>
        </div>
        <div className="description cell">
            { details.ivr_number } { naiveTitleCaseParagraph(details.description) }
        </div>
        <div className="cell">
          <Link to={linkPath}>
            { shortName(details.neighborhood) }
          </Link>
        </div>
        <div className="date cell">{ details.date.split(' ')[0] }</div>
      </div>
    );
  }
}

export default Permit;
