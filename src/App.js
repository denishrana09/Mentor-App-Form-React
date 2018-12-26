import React, { Component } from 'react';
import FormHeader from './Components/FormHeader';
import FormContent from './Components/FormContent';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FormHeader/>
        <FormContent/>
      </div>
    );
  }
}

export default App;