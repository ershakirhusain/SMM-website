import React, { Component } from 'react';
import logo from './images/logo.jpg';
import HeaderDisplay from './components/header';
import FooterDisplay from './components/footer';
import BodyDisplay from './components/body';
import NameForm from './components/test';
 
class App extends Component {
  render() {
    return (
		<div>
			<HeaderDisplay></HeaderDisplay>,
			<BodyDisplay></BodyDisplay>,
			<FooterDisplay></FooterDisplay>
		</div>
    );
  }
}


export default App;
