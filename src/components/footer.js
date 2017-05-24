import React, { Component } from 'react';

class FooterDisplay extends Component {
  render() {
    return (
		<div>
			<div className="prefooter"></div>
			<footer className="footer" >
				<div className="footer-btm-bar">
					<div className="container">
						<div className="footer-copyright row">
							<div className="col-xs-12">
								<p>
									<span className='footer_copy'> 2016 TestWebsite</span> | <span className='footer_credit'>Performing Audits Since 2006</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
    );
  }
}

export default FooterDisplay;
