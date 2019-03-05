import React, { Component } from 'react'
import ReactModal from 'react-modal'
import icons from './constants/Icons'

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
        <ReactModal
          style={{
            overlay: {
              backgroundColor: 'rgba(29, 30, 34, 0.75)'
            },
            content: {
              border: '2px solid #ccc',
              background: '#1d1e22'
            }
          }}
          isOpen={this.state.showModal}
          contentLabel='Minimal Modal Example'
        >
          <i class={icons.Close} onClick={this.handleCloseModal} />
          <div className='project-modal'>
            <h3>{this.props.title}</h3>
            <div className='modal-icons'>
              {this.props.icons.map(icon => (
                <i class={icon} />
              ))}
            </div>
            <div className='project-desc'>{this.props.shortDescription}</div>
          </div>
        </ReactModal>

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
