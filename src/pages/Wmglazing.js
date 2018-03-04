import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Wmglazing extends Component {
	render() {
		return (
      <div className="work-container animated fadeIn">
				<div className="heading">
        	<h1>WM Glazing</h1>
					<h2>React.js</h2>
					<h5>HTML, SASS, Branding, Dropbox API</h5>
				</div>
				<div className="flex">
	        <div className="half-side">
	          <p>This was a brochure website created for a window company based in Birmingham.</p>
						<p>They came to me as their current website was quite outdated, and they wanted the ability to upload photos themselves.</p>
						<p>I decided to use the Dropbox API to display their galary images since they were using Dropbox to share photos anyway, and this allowed them to have control over the images on their site without the weight of a full CMS.</p>
						<p>I really enjoyed working on this project alongside WM Glazing and I'm very happy with the outcome.</p>
						<a href="" className="button">In progress</a>
						<Link to="/work/" className="button">Portfolio</Link>
				</div>
	        <div className="half-side img">
						<img src={require('../images/wmglazing.jpg')} alt="" />
	        </div>
				</div>
      </div>
    )
	}
}

export default Wmglazing
