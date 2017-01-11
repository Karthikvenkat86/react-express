var React         = require('react'),
    ReactDOM      = require('react-dom'),
    TestComponent = require('./components/TestComponent.jsx');

  	import App from './components/googleLocalRoute.jsx';
  	import { Router, Route, IndexRoute } from 'react-router';
  	import BrowserHistory from 'react-router/lib/BrowserHistory';
	import {New,Existing,GoogleLogin} from './components/googleLocalRoute.jsx';


function run() {

	ReactDOM.render(
	  <TestComponent/>,
	  document.getElementById("react-container")
	);


	if(document.getElementById('forGoogle')){
			ReactDOM.render((
		   <Router history = {BrowserHistory}>
		      <Route path = "/google" component = {App}>
		         // <IndexRoute component = {New} />
		         <Route path = "/google/new" component = {New} />
		         <Route path = "/google/existing" component = {Existing} />
		         <Route path = "/google/googlelogin" component = {GoogleLogin} />
		      </Route>
		   </Router>
			
		), document.getElementById('forGoogle'))
	}

}


if ( document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}

