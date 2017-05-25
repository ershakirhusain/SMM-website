import React, { Component } from 'react';
import '../../style/login.css';

class LoginDisplay extends Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
	}
	  
	handleLoginClick() {
		//e.preventDefault();
		console.log('The link was clicked.');
		console.log(this.usernameTxt.value);
		console.log(this.passwordTxt.value);
		
		//make ajax later
		window.location = '/dashboard';

  }	
  render() {
    return (
		<div>
			<div id="login">
				<h1><strong>Welcome.</strong> Please login.</h1>
				<form action="javascript:void(0);" method="GET">
					<fieldset>
						<p><input type="text" required placeholder="Enter your Username" ref={(usernameTxt) => {this.usernameTxt = usernameTxt}} /></p>
						<p><input type="password" required placeholder="Enter your Password"  ref={(passwordTxt) => {this.passwordTxt = passwordTxt}} /></p>
						<p><a href="#">Forgot Password?</a></p>
						<p>
						<button onClick={this.handleLoginClick}> Login </button>
						</p>
					</fieldset>
				</form>
				<p><span class="btn-round">or</span></p>
				<p>
					<a class="facebook-before"></a>
					<button class="facebook">Login Using Facbook</button>
				</p>
				<p>
					<a class="twitter-before"></a>
					<button class="twitter">Login Using Twitter</button>
				</p>
			</div>
		</div>
    );
  }
}

export default LoginDisplay;
