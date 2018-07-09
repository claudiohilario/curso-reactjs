import React, { Component } from 'react';
import Title from './Title';
import Square from './Square';

class App extends Component {

  
  render() {
    return (
      <div>
        {['blue', 'red', 'green'].map((square, index) => (<Square key={index} color={square} />)) }
      </div>
    ); 
  }
}

export default App;
