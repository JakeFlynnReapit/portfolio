import React, { Component } from 'react'
import OptionPicker from '../components/OptionPicker'
import { Link } from 'react-router-dom'

class Landing extends Component {
  render() {
    return (
      <div className="full-screen">
    		<h1>Hello, I'm <span className="name">Jake Flynn</span></h1>
        <h3>I'm a front-end developer with experience in <OptionPicker />.</h3>
        <Link to="/work/" className="button">
          View my work
        </Link>
      </div>
    )
  }
}

export default Landing
