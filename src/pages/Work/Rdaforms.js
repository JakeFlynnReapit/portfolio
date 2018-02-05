import React, { Component } from 'react';

class Rdaforms extends Component {

  render() {
    return (
      <div className="container rdaforms-page">
        <div className="closeWorkItem"
             onClick={
               pageName => this.props.handleClick(null)
             }>
          <i className="fa fa-times"/>
        </div>
        <h1>Specification Forms</h1>
        <h2 className="subheading">JavaScript, jQuery</h2>
        <div className="half-side">
          <p>This project was one I took up in order to make the ordering process for the products we sell a lot easier.</p>
          <p>The old method of ordering products involved sending over word documents that the clients would fill out and send back (some would even print them out and fill them in by hand!)</p>
          <p>I thought this wasn't the most efficient way to do this. I wanted to make this more seamless - the idea was to have a central hub where all of the products are that can be filled out to the client's specifications and then sent to us via an e-mail.</p>
          <p>I went for a single-page web app approach where all of the different products are different sections, you can choose what you like and there is one submit button.</p>
          <a className="button" href="">View Source Code</a>
          <a className="button" href="https://digital.reapit.net/config/" target="_blank" rel="noopener noreferrer">View Live Site</a>
        </div>
        <div className="half-side">
          <img src={require('../../images/rda-forms-full.png')} alt="Config Form Homepage" />
        </div>
      </div>
    )
  }

}

export default Rdaforms
