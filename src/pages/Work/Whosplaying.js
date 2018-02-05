import React, { Component } from 'react';

class Whosplaying extends Component {

  render() {
    return (
      <div className="container whosplaying-page">
        <div className="closeWorkItem"
             onClick={
               pageName => this.props.handleClick(null)
             }>
          <i className="fa fa-times"/>
        </div>
        <h1>Who's Playing</h1>
        <h2 className="subheading">JavaScript, jQuery</h2>
        <div className="half-side">
          <p>Who's Playing was a site I created for an online gaming community.</p>
          <p>The idea was to get real-time updates of teams that are currently playing.</p>
          <p>Since the game doesn't have an open API for this information, I had to take a hacky approach in order to get this to work.</p>
          <p>They have a webpage with data including all of the teams, and you can navigate to find when each team has last played.</p>
          <p>I achieved the end result by making an ajax call to the page with all of the teams, iterating through each team and checking the last played time. If that time was within the last hour then we'll display the team.</p>
          <p>I saw a real demand for this kind of thing within the game's community, so I created it in my free time.</p>
          <p>It was a challenge to get this to work without any resources available, but I managed to get there in the end.</p>
        </div>
        <div className="half-side image">
          <img src={require('../../images/whosplaying-full.png')} alt="Whos Playing Homepage"/>
          <img src={require('../../images/whosplaying2-full.png')} alt="Whos Playing Demo"/>
        </div>
        <a href="" className="button">View Source Code</a>
      </div>
    )
  }

}

export default Whosplaying
