import React, { Component } from 'react';

let jobs = {

  companies: {
      info: [
        {
          name: 'Reapit Ltd.',
          jobTitle: 'junior web developer',
          duration: 'april 2017 - current',
          stack: [
            'HTML5',
            'CSS3 (LESS)',
            'JavaScript',
            'jQuery',
            'SQL',
            'Git',
            'XML'
          ]
        },
      ]
    }

  }

class WorkExperience extends Component {

  render() {
    return (
      <div className="job">
        <h5>{this.props.companies.name}</h5>
        <h6>{this.props.companies.jobTitle}</h6>
        <h6>{this.props.companies.duration}</h6>
        <ul>
          {this.props.companies.stack.map((tech, index) =>
            <li key={index}>{tech}</li>
          )}
        </ul>
      </div>
    )
  }

}

class Experience extends Component {

  constructor() {
    super();
    this.state = {data: jobs}
  }

  render() {
    return (
      <div className="section experience">
        {this.state.data.companies &&
          <div>
        		<h3>experience</h3>
        		{this.state.data.companies.info.map((company, index) =>
              <WorkExperience companies={company} key={index} />
            )}
          </div>
        }
    	</div>
    )
  }

}

export default Experience
