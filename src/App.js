import React, { Component } from 'react';
import FormHeader from './Components/FormHeader';
import FormContent from './Components/FormContent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { activeClass:'g'}; //g-general, l-local, c-contact
    this.handleActiveClassChange = this.handleActiveClassChange.bind(this);
  }

  handleActiveClassChange(activeClass){
      this.setState({activeClass : activeClass});
  }

  render() {
    return (
      <div className="container">
        <FormHeader
          activeClass={this.state.activeClass}
          onActiveClassChange={this.handleActiveClassChange}
        />
        <FormContent
          activeClass={this.state.activeClass}
        />
      </div>
    );
  }
}

export default App;