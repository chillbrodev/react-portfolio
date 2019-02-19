import React, { Component } from 'react'

class Project extends Component {
  render() {
    return (
      <div className='project'>
        {this.props.title}
        <img src={this.props.logo} />
        {/* {this.props.shortDescription} */}
      </div>
    )
  }
}

export default Project
