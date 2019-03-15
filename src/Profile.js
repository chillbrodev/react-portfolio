import React, { Component } from 'react'
import profile from './images/profile/profile.jpg'

class Profile extends Component {
  render() {
    return (
      <div>
        <div className='profileText'>
          I am a product developer who is passionate about building world class
          applications for all types of industries. I have spent the last 5
          years adventuring through the Android development space, first using
          Java then diving headfirst into Kotlin. I have built mobile/voice
          products using TDD, Java, Kotlin, MVP, MVVM & RxJava. I utilized these
          tools during engagements with AAA, OEM Automakers, iHeartRadio and
          other startups. On the side I am starting a new journey of Full Stack
          Web Development with a focus in React/Node.JS. Outside of work I am an
          avid home chef specializing in healthy vegetarian meals, a guitar
          player, a lover of nature and most importantly a student. Let's
          discuss how I can share my knowledge with your team to help level each
          other up to new heights.
          <div className='profile-info'>
            <p />
            Email: jon@chillbrodev.com
            <p />
            <div>
              <img src={profile} alt='profile' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
