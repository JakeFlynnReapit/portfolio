import React, { Component } from 'react';

class Thesignlife extends Component {

  render() {
    return (
      <div className="container thesignlife-page">
        <div className="closeWorkItem"
             onClick={
               pageName => this.props.handleClick(null)
             }>
          <i className="fa fa-times"/>
        </div>
        <h1>The Sign Life</h1>
        <h2 className="subheading">Branding, HTML/SASS</h2>
        <div className="half-side thesignlife-page">
          <p>The Sign Life was a simple brochure website for a local startup company that teaches sign language and raises awareness for the Deaf community.</p>
          <p>I had complete freedom on the design of the site, I just had to follow the content structure provided by the client.</p>
          <p>It was a fun project to work on as I had creative control over the project and I have family in the Deaf community.</p>
        </div>
        <div className="half-side">
          <img src={require('../../images/thesignlife-full.png')} alt="The Sign Life Website"/>
        </div>
        <a className="button" href="thesignlife.co.uk" target="_blank">View Live Site</a>
      </div>
    )
  }

}

export default Thesignlife
