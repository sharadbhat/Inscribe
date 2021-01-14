import React, { Component } from 'react'

// Images
import logo256 from '../images/logo256.png'

class Logo extends Component {
  render() {
    return (
      <a href='/' title='Inscribe'>
        <img src={logo256} alt='logo' width='40' />
      </a>
    )
  }
}

export default Logo
