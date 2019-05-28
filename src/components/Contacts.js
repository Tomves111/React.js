import React, { Component } from 'react'

class Contacts extends Component {
  render() {
    const {name, email, phone} = this.props;
    return (
      <div>
        <h4>{this.props.name}</h4>
        <ul>
        <li classNAme="list-group-item">Email: {this.props.email}</li>
        <li className="list-group-item">Phone: {this.props.phone}</li>
        </ul>
      </div>
    )
  }
}

export default Contacts;