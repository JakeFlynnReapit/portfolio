import React, { Component } from 'react';

class ConfigUI extends Component {
  render() {
    return (
      <div className="container configui-page">
        <div className="closeWorkItem"
             onClick={
               pageName => this.props.handleClick(null)
             }>
          <i className="fa fa-times"/>
        </div>
        <h1>Configuration UI</h1>
        <h2 className="subheading">JavaScript, jQuery</h2>
        <div className="half-side copy">
          <p>This was a project I was asked to complete for the support team at my workplace.</p>
          <p>The reasoning behind this was to allow the support team, who have a lesser knowledge of XML, to be able to directly view and edit configuration files for clients in the browser.</p>
          <p>The benefits of this were to save a lot of time compared to having to go through service infrastructure to get the XML files updated, when sometimes only a small change was required.</p>
          <p>The application accepts user input on the type of configuration file they would like to load, gets the relevant XSD for it and generates nested form inputs relative to the rules that have been set in the XSD.</p>
          <p>After this has been done, it will load the client's specific pre-existing configuration XML file (should it exist) and then populates the form inputs with the relevant values from the XML file that they can then edit and save. This information is then sent as JSON and there is a php module on the back-end which consumes the JSON and creates the XML file.</p>
          <p>This was a fun piece of work as I was set off with complete freedom on how this would be created. It was challenging at times (having to convert an XSD file into a form with inputs correctly nested provides some hiccups) but very rewarding.</p>
        </div>
        <div className="half-side image">
          <img src={require('../../images/config-ui-full.png')} alt="Configuration UI Example"/>
          <img src={require('../../images/config-ui2-full.png')} alt="Configuration UI and XML file"/>
        </div>
        <a href="" className="button">View Source Code</a>
      </div>
    )
  }
}

export default ConfigUI
