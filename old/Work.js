import React, { Component } from 'react';
import ConfigUI from '../pages/Work/ConfigUI';
import Rdaforms from '../pages/Work/Rdaforms';
import Thesignlife from '../pages/Work/Thesignlife';
import Whosplaying from '../pages/Work/Whosplaying';
import Ecommerce from '../pages/Work/Ecommerce';
import Playlister from '../pages/Work/Playlister';

let projects = {

  workItems: {
    cases: [
      {
        title: 'Configuration UI',
        description: 'A single-page application which calls an XML file, consumes it\'s relevant XSD and allows editing and saving.',
        className: 'configui',
        page: 'ConfigUI'
      },
      {
        title: 'Specification Forms',
        description: 'Interactive forms built with jQuery and Php',
        className: 'rdaforms',
        page: 'Rdaforms'
      },
      {
        title: 'Who\'s Playing',
        description: 'A single-page application built with jQuery that retrieves real-time information on the leaderboards for a popular online game.',
        className: 'whosplaying',
        page: 'Whosplaying'
      },
      {
        title: 'The Sign Life',
        description: 'A startup company brochure website',
        className: 'thesignlife',
        page: 'Thesignlife'
      },
      {
        title: 'e-Commerce Website',
        description: 'An e-Commerce website built with React.js and Node.js',
        className: 'ecommerce',
        page: 'Ecommerce'
      },
      {
        title: 'Playlister',
        description: 'A single-page application built with React.js which displays playlist information based on real Spotify data.',
        className: 'playlister',
        page: 'Playlister'
      }
    ]
  }

}

class Project extends Component {

  render() {
    return (
      <div className={'workColumn ' + this.props.workItems.className }>
        <div className="preview"
             onClick={
               pageName => this.props.handleClick(this.props.workItems.page)
             }
             >
          <h4>{this.props.workItems.title}</h4>
          <p>{this.props.workItems.description}</p>
        </div>
      </div>
    )
  }

}

class Work extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: projects,
      selectedProject: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(pageName) {
    this.setState({selectedProject: pageName})
  }

  selectedProject() {
    var selectedProject = this.state.selectedProject
    if(selectedProject === 'close'){
      this.setState({selectedProject: null})
    }
    if(selectedProject === 'ConfigUI'){
      return <ConfigUI handleClick={this.handleClick} />
    } else if(selectedProject === 'Rdaforms'){
      return <Rdaforms handleClick={this.handleClick} />
    } else if(selectedProject === 'Whosplaying'){
      return <Whosplaying handleClick={this.handleClick} />
    } else if(selectedProject === 'Thesignlife'){
      return <Thesignlife handleClick={this.handleClick} />
    } else if(selectedProject === 'Ecommerce'){
      return <Ecommerce handleClick={this.handleClick} />
    } else if(selectedProject === 'Playlister'){
      return <Playlister handleClick={this.handleClick} />
    }
  }

  render() {

    return (
      <div className="section work">
    		<h3>work</h3>
    		<div className="container flex">
          {this.state.data.workItems.cases.map((project, index) =>
            <Project
              workItems={project}
              key={index}
              handleClick={this.handleClick}
            />
          )}
        </div>
        { this.state.selectedProject &&
          this.selectedProject()
        }
    	</div>
    )
  }

}

export default Work
