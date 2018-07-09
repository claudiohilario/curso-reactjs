import React, { Component } from 'react';

class Square extends Component {

    static defaultProps = {
        color: 'red',
    }
  
  render() {
    return (
      <div style={{
          backgroundColor: this.props.color,
          height: '100px',
          width: '100px',
      }} />
    ); 
  }
}

export default Square;