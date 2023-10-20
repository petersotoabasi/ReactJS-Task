import React, { Component } from "react";


export default class Card extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <div className="card" style={{width:`18`, border:`0`}}>
          <div className="card-body ml-5">
            <h5 className="card-title">{this.props.title}</h5>
            <h6 className="card-subtitle mb-2 fw-bold fs-5 text-body-secondary"> {this.props.subtitle}</h6>
            <p className="card-text text-align text-xs">{this.props.text}</p>
            </div>
        </div>
      </div>
    );
  }
}
