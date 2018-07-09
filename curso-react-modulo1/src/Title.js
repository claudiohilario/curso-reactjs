import React, { Component } from 'react';

class Title extends Component {    
    render() {
        console.log(this.props);

      return (
          <h1>Olá {this.props.name}</h1>
      ); 
    }
  }
  
  export default Title ;