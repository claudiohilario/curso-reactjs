import React, { Component } from 'react';
import PropTypes from "prop-types";

class FormSection extends Component {

  static propTypes = {
    fourth: PropTypes.instanceOf(HTMLInputElement).isRequired,
  }

  render() {
    return <input type="text" defaultValue="Fourth" ref={this.props.fourth }  />
  }
}

class App extends Component {
  third = React.createRef();
  fourth = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.refs.first, this.secound, this.third.current, this.fourth.current);
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="text" defaultValue="First" ref="first" />
        <input type="text" defaultValue="Second" ref={input => this.secound = input} />
        <input type="text" defaultValue="Third" ref={this.third} />

        <FormSection fourth={this.fourth } />
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
