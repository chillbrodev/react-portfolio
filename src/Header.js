import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <div className='home' onClick={this.props.handleHomeClick}>
            Home
          </div>
          <div className='profile' onClick={this.props.handleProfileClick}>
            Profile
          </div>
          <div className='resume' onClick={this.props.handleResumeClick}>
            Resume
          </div>
        </div>
      </div>
    )
  }
}

export default Header
