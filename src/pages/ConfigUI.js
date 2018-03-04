import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ConfigUI extends Component {
  render() {
    return (
      <div className="work-container animated fadeIn">
				<div className="heading">
        	<h1>Configuration UI</h1>
					<h2>jQuery</h2>
					<h5>HTML, CSS, PHP, UI/UX</h5>
				</div>
				<div className="flex">
	        <div className="half-side">
	          <p>This app was built to allow the support team at my work place, who have a lesser knowledge of XML, to be able to view and edit XML configuration files in a browser.</p>
	          <p>The main benefit of this was to save time over going through the web team to get the XML files updated, when sometimes only a small change was required.</p>
	          <p>The app allows the user to pick an XML file they would like to load, gets the relevant XSD for it and generates nested form inputs relative to the rules that have been set in the XSD.</p>
	          <p>The app then populates the inputs with the values from the XML file and can then be edited and saved.</p>
						<p>The input values are saved as an object and sent to the server which creates a new XML file from the data.</p>
	          <p>I enjoyed this piece of work as I had complete freedom on how this would be created. It was challenging at times but jumping over the hurdles was very rewarding.</p>
						<a href="https://github.com/jakeswork/config-ui/blob/master/app.js" target="_blank" rel="noopener noreferrer" className="button">View Source</a>
						<Link to="/work/" className="button">Portfolio</Link>
				</div>
	        <div className="half-side img">
	          <img src={require('../images/config.png')} alt="Configuration UI Example"/>
	        </div>
				</div>
      </div>
    )
  }
}

export default ConfigUI
