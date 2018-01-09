import React, { Component } from 'react'

const img = {
  src: require('../images/jakeflynn.jpg'),
  alt: 'Personal Picture'
}

class Landing extends Component {
  render() {
    return (
      <div className="landing">
    		<div className="image">
    			<img src={img.src}
          alt={img.alt}/>
    		</div>
    		<h1>Jake Flynn</h1>
    		<h2 className="subheading">web developer</h2>
    		<p>A front-end developer with experience in branding, design, and single-page applications.</p>
    		<i className="fa fa-angle-down"></i>
    	</div>
    )
  }
}

export default Landing
