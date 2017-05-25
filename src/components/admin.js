import React, { Component } from 'react';
import HeaderDisplay from './header';
import LoginDisplay from './login/login';

class AdminModule extends Component {
  render() {
    return (
		<div>
			<HeaderDisplay></HeaderDisplay>,		
			<LoginDisplay></LoginDisplay>,		
		</div>
    );
  }
}

export default AdminModule;
