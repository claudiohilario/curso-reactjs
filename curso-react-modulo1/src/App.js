import React, { Component } from 'react';
import Title from './Title';
import Square from './Square';

class App extends Component {

  
  render() {
    return (
      <div onClick={function(e){
        alert('Clicou aqui!');
      }}>
        <Square />
      </div>
    ); 
  }
}

export default App;
