import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Project extends Component {
  render() {
    return (
			<Link to={"/work" + this.props.workItems.path} className="grid-item">
	      {this.props.workItems.title}
			</Link>
		)
  }
}

let projects = {
  workItems: {
    cases: [
      {
        title: 'Configuration UI',
        description: 'A single-page application which calls an XML file, consumes it\'s relevant XSD and allows editing and saving.',
        className: 'configui',
				path: '/configui/'
      }, {
        title: 'Specification Forms',
        description: 'Interactive forms built with jQuery and Php',
        className: 'rdaforms',
				path: '/forms/'
      }, {
        title: 'Who\'s Playing',
        description: 'A single-page application built with jQuery that retrieves real-time information on the leaderboards for a popular online game.',
        className: 'whosplaying',
				path: '/whosplaying/'
      }, {
        title: 'The Sign Life',
        description: 'A startup company brochure website',
        className: 'thesignlife',
				path: '/thesignlife/'
      }, {
        title: 'WM Glazing',
        description: 'A brochure website built with React.js',
        className: 'wmglazing',
				path: '/wmglazing/'
      }, {
        title: 'Playlister',
        description: 'A single-page application built with React.js which displays playlist information based on real Spotify data.',
        className: 'playlister',
				path: '/playlister/'
      }
    ]
  }
}

class PortfolioItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: projects
    }
  }

  render() {
    return (<div className="full-screen work">
			<h1>Portfolio</h1>
      <div className="container flex">
        {this.state.data.workItems.cases.map(
          (project, index) =>
          <Project
            workItems={project}
            key={index}
          />)
        }
      </div>
			<div className="contact">
				<a href="https://github.com/jakeswork/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt" data-fa-transform="shrink--10"></i></a>
				<a href="mailto:jakepflynn@gmail.com" rel="noopener noreferrer"><i className="far fa-envelope-open" data-fa-transform="shrink--10"></i></a>
				<a href="https://www.linkedin.com/in/jakepflynn/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" data-fa-transform="shrink--10"></i></a>
			</div>
    </div>)
  }

}

export default PortfolioItem
