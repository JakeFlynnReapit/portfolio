import React, { Component } from 'react';

let projects = {

  workItems: {
    cases: [
      {
        title: 'Configuration UI',
        description: 'A single-page application which calls an XML file, consumes it\'s relevant XSD and allows editing and saving.',
        className: 'configui'
      },
      {
        title: 'Specification Forms',
        description: 'Interactive forms built with jQuery and Php',
        className: 'rdaforms'
      },
      {
        title: 'Who\'s Playing',
        description: 'A single-page application built with jQuery that retrieves real-time information on the leaderboards for a popular online game.',
        className: 'whosplaying'
      },
      {
        title: 'The Sign Life',
        description: 'A startup company brochure website',
        className: 'thesignlife'
      },
      {
        title: 'e-Commerce Website',
        description: 'An e-Commerce website built with React.js and Node.js',
        className: 'ecommerce'
      },
      {
        title: 'Playlister',
        description: 'A single-page application built with React.js which displays playlist information based on real Spotify data.',
        className: 'playlister'
      }
    ]
  }

}

class Project extends Component {

  render() {
    return (
      <div className={'workColumn ' + this.props.workItems.className }>
        <div className="preview">
          <h4>{this.props.workItems.title}</h4>
          <p>{this.props.workItems.description}</p>
        </div>
      </div>
    )
  }

}

class Work extends Component {

  constructor() {
    super()
    this.state = {
      data: projects,
      selectedProject: {}
    }
  }

  render() {
    return (
      <div className="section work">
    		<h3>work</h3>
    		<div className="container">
          {this.state.data.workItems.cases.map((project, index) =>
            <Project workItems={project} key={index} />
          )}
        </div>
    	</div>
    )
  }

}

export default Work
