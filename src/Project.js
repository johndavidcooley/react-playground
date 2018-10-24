import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Project extends Component {
  render() {
    return (
      <Link to={`/${this.props.routeTo}`}>
        <div className="project">
          {this.props.projectName}
        </div>
      </Link>
      
    )
  }
}
