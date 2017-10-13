import React, { Component } from 'react';
import Permit from './Permit'

class PermitList extends Component {
  render() {
    return (
      <div className="permit-list">
        <header className="permit-list-header">
          <h3>Permits</h3>
        </header>
        <div className="permit-list container">
          {
            this.props.permits.map((obj, idx) => <Permit key={idx} index={idx} details={obj} />)
          }
        </div>
      </div>
    );
  }
}

export default PermitList;
