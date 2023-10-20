import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props){
    super(props)
}
  render() {
    return (
        <button className={`${this.props.color} ${this.props.text} ${this.props.style} btn btn-lg display-5  pill shadow-sm mx-1 mt-3 px-3 type="submit $`}
      >{this.props.name}
      </button>
    )
  }
}


