import React, {Component} from 'react';
import Modal from './modal';

import staples from '../pics/staples.svg'
import rising  from '../pics/rising-stars.svg'



class FundItem extends Component {

  constructor(){
    super();

    this.state = {
      'open': false
    }
  }

  onClick(e){
    e.preventDefault();
    this.setState({open: !this.state.open})
  }


  render(){
    return (
      <div className="funditem">
        <img src={this.props.staples ? staples : rising} alt="logo" className="funditem--logo" />
        <h1 className="funditem--title">{this.props.title}
          {this.props.urgent ? (
            <a href="#" className="urgent" onClick={this.onClick.bind(this)}> (!)</a>
          ) : (
            <span></span>
          )}
        </h1>
        { this.state.open && <Modal /> }
        <input type="range" className="funditem--slider" />
      </div>
  )};
}

export default FundItem;
