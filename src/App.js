import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Work from './pages/Work.js';
import Landing from './pages/Landing';

class App extends Component {
  render() {
    return (
      <Router>
				<div>
	        <Switch>
	          <Route exact path="/" component={Landing} />
	          <Route path="/work/" component={Work} />
	        </Switch>
				</div>
      </Router>
    )
  }
}

export default App
