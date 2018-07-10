import React, { Component } from 'react';

class Buttom extends Component {

    render() {
      return (
          <button>{this.props.children}</button>
      ); 
    }
  }
  
  export default Buttom ;