import React, { Component } from 'react';

class BodyDisplay extends Component {
	  constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	  }
  
	handleClick() {
		//alert(this.nameTxt.value);
		//alert(this.emailTxt.value);
		//alert(this.websiteTxt.value);
		
		fetch('http://localhost:3004/bugs', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
			name: this.nameTxt.value,
			email: this.emailTxt.value,
			website: this.websiteTxt.value,
		  })
		})		
		  
	}
	render() {
		return (
		<div>
		<div className="inner-container">
				<section id="themo_service_block_split_1" className=" service-split ">
					<div class='container'>
						<div className="row">
							<div className="section-header col-xs-12 centered">
								<h1 className="headerH1Style">
									Job Services <br /> For Small Business
								</h1>
								<p>A few of the jobs we provide for small businesses.</p>
							</div>
						</div>
						<div className="row">
							<div className="simple-conversion ">
								<div className="frm_forms  with_frm_style frm_style_formidable-style" id="frm_form_21_container">
									<form enctype="multipart/form-data" method="post" className="frm-show-form " id="form_f0oqw3">
										<div className="frm_form_fields ">
											<fieldset>
												<legend className="frm_hidden">IT Services Request</legend>

												<div id="frm_field_92_container" className="frm_form_field form-field  frm_none_container">
													<label htmlFor="field_ty2k3e" className="frm_primary_label">Name <span className="frm_required"></span>
													</label> <input type="text" id="field_ty2k3e" name="item_meta[92]" placeholder="enter firstname" ref={(nameTxt) => {this.nameTxt = nameTxt}} />

												</div>
												<div id="frm_field_93_container" className="frm_form_field form-field  frm_none_container">
													<label htmlFor="field_pwwgc8" className="frm_primary_label">Email Address <span className="frm_required"></span>
													</label> <input type="text" id="field_pwwgc8" name="item_meta[93]" placeholder="enter email"  ref={(emailTxt) => {this.emailTxt = emailTxt}} />

												</div>
												<div id="frm_field_94_container" className="frm_form_field form-field  frm_none_container">
													<label htmlFor="field_d5g4pb" className="frm_primary_label">Website/URL <span className="frm_required"></span>
													</label> <input type="text" id="field_d5g4pb" name="item_meta[94]" placeholder="enter website"  ref={(websiteTxt) => {this.websiteTxt = websiteTxt}} />

												</div>
												<input type="hidden" name="item_key" value="" />
												<div className="frm_submit">
													<input type="button" value="Request Job Services" onClick={this.handleClick} /> 
												</div>
											</fieldset>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div>
				<section id="themo_call_to_action_1" className=" simple-cta  light-text">
					<div class='container'>
						<div className="row">
							<div class='themo-action-text  '>
								<span>Ready to get started with IT?</span>
							</div>
							<a href="#" className="btn btn-ghost   ">Request A Proposal</a>
						</div>
					</div>
				</section>
			</div>
		</div>
    );
  }
}

export default BodyDisplay;
