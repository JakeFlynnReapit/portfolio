import React, { Component } from 'react';

const skillsArr = [
  "JavaScript",
  "jQuery",
  "HTML5",
  "CSS3",
  "SQL",
  "CSS Frameworks",
  "React.js",
  "CSS Preprocessors",
  "Responsive Design",
  "Git",
  "Photoshop",
  "Sketch",
  "SEO",
  "UI/UX",
  "XML",
  "Branding"
]

const newSkills = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "Php"
]

class Skills extends Component {
  render() {
    return (
      <div className="section skills">
    		<h3>skills</h3>
    		<ul className="container">
    			{skillsArr.map(function(skill, index){
            return <li key={ index }>{skill}</li>;
          })}
    		</ul>
    		<h5>in progress..</h5>
    		<ul className="container">
    			{newSkills.map(function(skill, index){
            return <li key={ index }>{skill}</li>;
          })}
    		</ul>
    	</div>
    )
  }
}

export default Skills
