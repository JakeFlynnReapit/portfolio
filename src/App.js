import React, { Component } from 'react';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Work from './components/Work';
import Experience from './components/Experience';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return(
      <div>
        <Landing />
        <Skills />
        <Work />
        <Experience />
        <Footer />
      </div>
    )
  }
}

export default App
