import React, { Component } from 'react';

class DashboardComponent extends Component {
	constructor(props) {
		super(props);
		this.loadData();
	}	
	
  loadData() {
	  var t = this;
	fetch('http://localhost:3004/bugs')
	  .then(function(response) {
		return response.json()
	  }).then(function(json) {
		console.log('parsed json', json)
		t.jsonData = json;
	  }).catch(function(ex) {
		console.log('parsing failed', ex)
	  })
  }
  
 componentDidMount() {
    console.log('GrandChild did mount.' +this.jsonData);
  }  
  
 componentWillMount() {
    console.log('componentWillMount did mount.' +this.jsonData);
  }    
  
// and or
componentDidUpdate() {
      console.log('componentDidUpdate did mount.' +this.jsonData);

}  
  render() {
    return (
		<div>
		<h1> welcome to react world {this.jsonData} </h1>
		
		
		</div>
    );
  }
}

export default DashboardComponent;
