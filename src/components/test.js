import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit( ) {
    alert('A name was submitted: ' + this.input.value);
     
  }

  render() {
    return (
      <form >
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <button value="Submit" onClick={this.handleSubmit}>submit</button>
      </form>
    );
  }
}


export default NameForm;
