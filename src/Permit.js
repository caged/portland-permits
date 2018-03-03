import React, { Component } from 'react';
import PermitIcon from './PermitIcon';
import { Link } from 'react-router-dom'
import { naiveTitleCaseParagraph, shortName } from './utils'

import './Permit.css';

class Permit extends Component {
  render() {
    const {details} = this.props
    const title = details.work || details.type || 'N/A'
    const category = PermitIcon.getNormalizedClassificationForTitle(title)
    const titleClasses = `title cell ${category}`
    const addressLink = `https://maps.google.com/?q=${details.address}`
    const nhPath = `/neighborhood/${details.nhid}`
    const typePath = `/type/${details.tid}`

    return (
      <div className="row permit">
        <div className="cell"><PermitIcon title={title} /></div>
        <div className={titleClasses}>
          <Link to={typePath}>
            { title }
          </Link>
        </div>
        <div className="address cell">
          <a href={addressLink}>{ details.address }</a>
        </div>
        <div className="description cell">
            { details.ccb_number } { naiveTitleCaseParagraph(details.description) }
        </div>
        <div className="cell">
          <Link to={nhPath}>
            { shortName(details.neighborhood) }
          </Link>
        </div>
        <div className="date cell">{ details.date.split(' ')[0] }</div>
      </div>
    );
  }
}

export default Permit;
