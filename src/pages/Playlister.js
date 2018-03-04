import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Playlister extends Component {
	render() {
		return (
			<div className="work-container animated fadeIn">
				<div className="heading">
        	<h1>Playlister</h1>
					<h2>React.js</h2>
					<h5>SASS, UI/UX, Node.js, Spotify API, OAuth</h5>
				</div>
				<div className="flex">
	        <div className="half-side">
	          <p>This was a single-page application built with the intent of practicing API consumption with React.js</p>
						<p>The outcomes of this project were to get some practice with React and working with an API using OAuth.</p>
						<p>The app logs you in with Spotify and then displays all of the relative account's playlist information.</p>
						<p>Whilst the app isn't really of much use at all, I enjoyed working on this project as it gave me an insight into how things like OAuth work and I learned some very valuable lessons along the way.</p>
						<a href="https://authentication-api.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="button">View Demo</a>
						<Link to="/work/" className="button">Portfolio</Link>
				</div>
	        <div className="half-side img">
						<img src={require('../images/playlister.jpeg')} alt="" />
	        </div>
				</div>
      </div>
		)
	}
}

export default Playlister
