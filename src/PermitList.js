import React, { Component } from 'react';
import Permit from './Permit'

class PermitList extends Component {
  render() {
    return (
      <div className="permit-list">
        <h3>Permits</h3>
        <ol className="permits">
          {
            this.props.permits.map((obj, idx) => <Permit key={idx} index={idx} details={obj} />)
          }
        </ol>
      </div>
    );
  }
}

export default PermitList;
