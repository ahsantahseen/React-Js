import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Ahsan/Ahsan';
import Ahsan from './Ahsan/Ahsan';
import Tag from './Ahsan/Tag';

class App extends Component {
  state={
    Companies:[
      {name:"Jazz",yrs: 12},
      {name:"UfONE",yrs: 25}
  ]
  }
  eventHandler=()=>{
    // console.log('it was clicked');
    let oldState = [...this.state.Companies];
    oldState[0] = {name:'Ahsan',yrs:30};
    this.setState({Companies:oldState});
  }

  render() {
    return (
      <div className="App"> 
        <h1>Hello This is a react app</h1>
        <button onClick={this.eventHandler}>Click Me!</button>
        <Ahsan />
        <Tag click={this.eventHandler} name={this.state.Companies[0].name} yrs={this.state.Companies[0].yrs}/>
        <Tag name={this.state.Companies[1].name} yrs={this.state.Companies[1].yrs}>but they still stink</Tag>
      </div>
    );
  }
}

export default App;
