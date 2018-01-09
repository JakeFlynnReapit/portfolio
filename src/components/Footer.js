import React, { Component } from 'react';

let contactMethods = {
  facebook: '',
  youTube: '',
  twitter: '',
  linkedIn: 'https://www.linkedin.com/in/jakepflynn/',
  gitHub: 'https://github.com/JakeFlynnReapit',
  stackOverflow: 'https://stackoverflow.com/users/7921461/jake-flynn',
  dribble: '',
  email: 'mailto:jakepflynn@gmail.com'
}

class Footer extends Component {

  constructor() {
    super()
    this.state = contactMethods
  }

  render() {
    return (
      <footer>
        <div className="six columns">
          <a href={this.state.email}>jakepflynn@gmail.com</a>
        </div>
  			<div className="six columns">
  				<a href={this.state.linkedIn}
             target="_blank">
  					<i className="fa fa-linkedin-square" aria-hidden="true"></i>
  				</a>
  				<a href={this.state.gitHub}
             target="_blank">
  					<i className="fa fa-github-square" aria-hidden="true"></i>
  				</a>
  				<a href={this.state.stackOverflow}
             target="_blank">
  					<i className="fa fa-stack-overflow" aria-hidden="true"></i>
  				</a>
  			</div>
    	</footer>
    )
  }
}

export default Footer
