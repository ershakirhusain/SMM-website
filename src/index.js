import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/style.css';
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import AdminModule from './components/admin';
import DashboardComponent from './components/dashboard';
import { Switch, Route } from 'react-router-dom'

ReactDOM.render(  
	<BrowserRouter>
		<Switch>
		  <Route exact path='/' component={App}/>
		  <Route path='/admin' component={AdminModule}/>
		  <Route path='/dashboard' component={DashboardComponent}/>
		</Switch>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
