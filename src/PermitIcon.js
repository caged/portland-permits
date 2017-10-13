import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './Permit.css';

class PermitIcon extends Component {
  constructor() {
    super()

    this.iconMap = {
      'complaint': 'bullhorn',
      'construction': 'building',
      'alteration': 'wrench',
      'short-term-rental': 'home',
      'addition': 'plus',
      'demolition': 'gavel',
      'design-review': 'photo',
      'adjustment': 'adjust',
      'right-of-way': 'random',
      'new-sign': 'map-signs',
      'historic-review': 'history',
      'zoning': 'object-group',
      'new': 'asterisk'
    }
  }

  getIconNameForClassification(classification) {
    return this.iconMap[classification] || 'file-text-o'
  }

  getIconNameForTitle(title) {
    const classification = PermitIcon.getNormalizedClassificationForTitle(title)
    return this.getIconNameForClassification(classification)
  }

  static getNormalizedClassificationForTitle(title) {
    let cf = 'default'

    if(!title) return cf

    title = title.toLowerCase()
    switch(true) {
      case /addition/.test(title): cf = 'addition'; break      
      case /alteration/.test(title): cf = 'alteration'; break
      case /new construction/.test(title): cf = 'construction'; break
      case /short term rental/.test(title): cf = 'short-term-rental'; break
      case /complaint/.test(title): cf = 'complaint'; break
      case /design review/.test(title): cf = 'design-review'; break
      case /adjustment/.test(title): cf = 'adjustment'; break
      case /demolition/.test(title): cf = 'demolition'; break
      case /right-of-way/.test(title): cf = 'right-of-way'; break
      case /new sign/.test(title): cf = 'new-sign'; break;
      case /historic/.test(title): cf = 'historic-review'; break;
      case /zoning/.test(title): cf = 'zoning'; break;
      case /new/.test(title): cf = 'new'; break;
    }

    return cf
  }

  render() {
    return (
      <FontAwesome
        className={PermitIcon.getNormalizedClassificationForTitle(this.props.title)}
        name={this.getIconNameForTitle(this.props.title)} />
    );
  }
}

export default PermitIcon;
