import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Thesignlife extends Component {

  render() {
    return (
      <div className="work-container animated fadeIn">
				<div className="heading">
	        <h1>The Sign Life</h1>
	        <h2>Branding</h2>
					<h5>HTML, SASS, Design, jQuery, PHP</h5>
				</div>
				<div className="flex">
	        <div className="half-side">
	          <p>The Sign Life was a simple brochure website for a local startup company that teaches sign language and raises awareness for the Deaf community.</p>
	          <p>I had complete freedom on the design of the site, I just had to follow the content structure provided by the client.</p>
	          <p>It was a fun project to work on as I had creative control over the project and I have family in the Deaf community.</p>
						<a className="button" href="http://www.thesignlife.co.uk" target="_blank" rel="noopener noreferrer">Visit Site</a>
						<Link to="/work/" className="button">Portfolio</Link>
					</div>
	        <div className="half-side img">
	          <img src={require('../images/thesignlife.jpg')} alt="The Sign Life Website"/>
	        </div>
				</div>
      </div>
    )
  }

}

export default Thesignlife
