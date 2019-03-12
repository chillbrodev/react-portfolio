import React, { Component } from 'react'
import ProjectModal from './ProjectModal'

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal(event) {
    this.setState({ showModal: true })
    event.preventDefault()
  }

  handleCloseModal(event) {
    this.setState({ showModal: false })
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <ProjectModal
          handleCloseModal={this.handleCloseModal}
          title={this.props.title}
          icons={this.props.icons}
          shortDescription={this.props.shortDescription}
          showModal={this.state.showModal}
          images={this.props.images}
          available={this.props.available}
        />
        {!this.state.showModal && (
          <div className='project' onClick={this.handleOpenModal}>
            <div className='project-title'>{this.props.title}</div>
            <img className='project-img' src={this.props.logo} />
          </div>
        )}
      </div>
    )
  }
}

export default Project
