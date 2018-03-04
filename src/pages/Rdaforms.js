import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Rdaforms extends Component {

  render() {
    return (
      <div className="work-container animated fadeIn">
				<div className="heading">
	        <h1>Specification Forms</h1>
	        <h2>jQuery</h2>
					<h5>HTML, LESS, PHP, UI/UX</h5>
				</div>
				<div className="flex">
	        <div className="half-side">
	          <p>This project was one I took up in order to make the ordering process for the products we sell a lot easier.</p>
	          <p>The old method of ordering products involved sending over word documents that the clients would fill out and send back (some would even print them out and fill them in by hand!)</p>
	          <p>I thought this wasn't the most efficient way to do this. I wanted to make this more seamless - the idea was to have a central hub where all of the products are that can be filled out to the client's specifications and then sent to us via an e-mail.</p>
	          <p>I went for a single-page web app approach where all of the different products are different sections that can each be filled out and all submitted at once.</p>
	          <a className="button" href="https://digital.reapit.net/config/" target="_blank" rel="noopener noreferrer">Visit Site</a>
						<Link to="/work/" className="button">Portfolio</Link>
	        </div>
	        <div className="half-side img">
	          <img src={require('../images/forms.jpg')} alt="Config Form Homepage" />
	        </div>
				</div>
      </div>
    )
  }

}

export default Rdaforms
