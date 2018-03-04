import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PortfolioItem from '../components/PortfolioItem'
import ConfigUI from '../pages/ConfigUI';
import Rdaforms from '../pages/Rdaforms';
import Thesignlife from '../pages/Thesignlife';
import Whosplaying from '../pages/Whosplaying';
import Wmglazing from '../pages/Wmglazing';
import Playlister from '../pages/Playlister';

class Work extends Component {
  render() {
    return (
			<Router>
	      <div className="animated fadeIn">
					<Switch>
						<Route exact path="/work/" component={PortfolioItem} />
						<Route exact path="/work/configui/" component={ConfigUI} />
						<Route exact path="/work/forms/" component={Rdaforms} />
						<Route exact path="/work/thesignlife/" component={Thesignlife} />
						<Route exact path="/work/playlister/" component={Playlister} />
						<Route exact path="/work/whosplaying/" component={Whosplaying} />
						<Route exact path="/work/wmglazing/" component={Wmglazing} />
					</Switch>
	      </div>
			</Router>
    )
  }
}

export default Work
