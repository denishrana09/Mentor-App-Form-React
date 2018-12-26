import React, { Component } from 'react';
import FormHeader from './Components/FormHeader';
import FormContent from './Components/FormContent';
import BgImage from './Images/bg.jpg';

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
    <div className="AppParent" style={{backgroundImage: `url(${BgImage})`,
      backgroundSize:"cover",minHeight:"100vh"}}>
      <div className="App-Heading"><h1>Mentor Application Form</h1></div>
      <div className="container App">
        <FormHeader
          activeClass={this.state.activeClass}
          onActiveClassChange={this.handleActiveClassChange}
        />
        <FormContent
          activeClass={this.state.activeClass}
        />
      </div>
    </div>
    );
  }
}

export default App;