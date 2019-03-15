import React, { Component } from 'react'
import ReactModal from 'react-modal'
import icons from './constants/Icons'
import links from './constants/Links'

class ProjectModal extends Component {
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
          isOpen={this.props.showModal}
          contentLabel='Minimal Modal Example'
        >
          <i class={icons.Close} onClick={this.props.handleCloseModal} />
          <div className='project-modal'>
            <h3>{this.props.title}</h3>
            <div className='modal-icons'>
              {this.props.icons.map(icon => (
                <i class={icon} />
              ))}
            </div>
            <div className='modal-desc'>
              {this.props.shortDescription}
              {this.props.media.length != 0 && (
                <div className='modal-media'>
                  {this.props.media.map(mediaItem => {
                    return (
                      <a href={mediaItem.url} target={links.TYPE}>
                        <h3>{mediaItem.info}</h3>
                      </a>
                    )
                  })}
                </div>
              )}

              {this.props.available.length != 0 && (
                <div>
                  <h3>Available for Download:</h3>
                  <div className='modal-dl'>
                    {this.props.available.map(item => {
                      return (
                        <a href={item.url} target={links.TYPE}>
                          <img src={item.asset} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </ReactModal>
      </div>
    )
  }
}

export default ProjectModal
