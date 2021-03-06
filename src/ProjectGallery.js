import React, { Component } from 'react'
import Project from './Project'
import SampleData from './constants/SampleData'

class ProjectGallery extends Component {
  render() {
    return (
      <div className='gallery'>
        {SampleData.projects.map(item => {
          return (
            <Project
              title={item.title}
              logo={item.logo}
              shortDescription={item.shortDescription}
              icons={item.icons}
              images={item.images}
              available={item.available}
              media={item.media}
            />
          )
        })}
      </div>
    )
  }
}

export default ProjectGallery
