import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import ProjectGallery from './ProjectGallery'
import Profile from './Profile'
import LINKS from './constants/Links'

class App extends Component {
  state = {
    showProjectGallery: true,
    showProfile: false
  }

  handleHomeClick = () => {
    console.log('Home was clicked')
    this.setState({
      showProjectGallery: true,
      showProfile: false
    })
  }

  handleProfileClick = () => {
    console.log('Profile was clicked')
    this.setState({
      showProjectGallery: false,
      showProfile: true
    })
  }

  handleResumeClick = () => {
    console.log('Resume was clicked')
    window.open(LINKS.RESUME, LINKS.TYPE)
  }

  render() {
    return (
      <div>
        <Header
          handleHomeClick={this.handleHomeClick}
          handleProfileClick={this.handleProfileClick}
          handleResumeClick={this.handleResumeClick}
        />
        {this.state.showProjectGallery && <ProjectGallery />}
        {this.state.showProfile && <Profile />}
      </div>
    )
  }
}

export default App
