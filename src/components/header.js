import React, { Component } from 'react';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom'

class HeaderDisplay extends Component {
  render() {
    return (
		<div>
			<header className="banner navbar navbar-default navbar-static-top" role="banner">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							<span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>
						</button>
						<div id="logo">
							<a href="#"> <img className="logo-main logo-reg" src={logo} height='50' width='129' alt="Internet Marketing Company | Phoenix, AZ | TestWebsite" />
							</a>
						</div>
					</div>
					<nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
						<ul id="menu-menu" className="nav navbar-nav">
							<li className="active dropdown menu-social-media-marketing">
							<Link to='/' >Home</Link>
							</li>

							<li className="menu-web-development">
								<Link to='/admin'>Admin</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>					
		</div>
    );
  }
}

export default HeaderDisplay;
