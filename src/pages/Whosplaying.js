import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Whosplaying extends Component {

  render() {
    return (
      <div className="work-container animated fadeIn">
				<div className="heading">
	        <h1>Who's Playing</h1>
	        <h2>jQuery</h2>
					<h5>HTML, SASS, UI/UX</h5>
				</div>
				<div className="flex">
	        <div className="half-side">
	          <p>Who's Playing was an app I created for a client.</p>
	          <p>The idea was to get real-time updates of teams that are currently playing on an online game.</p>
						<p>Since there is no API for the game's data, I had to get around this in a hacky way.</p>
	          <p>I achieved the end result by making an ajax call to the games website that listed all of the teams, iterating through each team and checking the last played time. If that time was within the last hour then it was displayed.</p>
	          <p>It was a challenge to get this to work without any resources available, but I managed to get there in the end.</p>
						<a href="https://github.com/jakeswork/whosplaying/blob/master/js/app.js" target="_blank" rel="noopener noreferrer" className="button">View Source</a>
						<Link to="/work/" className="button">Portfolio</Link>
				</div>
	        <div className="half-side img">
	          <img src={require('../images/whosplaying.png')} alt="Whos Playing Homepage"/>
	        </div>
				</div>
      </div>
    )
  }

}

export default Whosplaying
