import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Ahsan/Ahsan";
import Ahsan from "./Ahsan/Ahsan";
import Tag from "./Ahsan/Tag";
import "./Ahsan/Tag.css";

class App extends Component {
  state = {
    Companies: [
      { name: "Jazz", yrs: 12 },
      { name: "UfONE", yrs: 25 },
    ],
    showCompanies: false,
  };
  eventHandler = (newName) => {
    // console.log('it was clicked');
    let oldState = [...this.state.Companies];
    oldState[0] = { name: newName, yrs: 30 };
    this.setState({ Companies: oldState });
  };
  nameChanger = (event) => {
    let oldState = [...this.state.Companies];
    oldState[0] = { name: event.target.value, yrs: 30 };

    this.setState({ Companies: oldState });
  };
  handlerfunc = () => {
    const doesShow = this.state.showCompanies;
    this.setState({ showCompanies: !doesShow });
  };

  render() {
    const inlineStyle = {
      width: "20%",
      border: "2px solid #eee",
      backgroundColor: "blue",
      cursor: "pointer",
    };
    let company = null;
    if (this.state.showCompanies) {
      company=(
        <div>
          <Ahsan />

          <Tag
            changer={this.nameChanger}
            name={this.state.Companies[0].name}
            yrs={this.state.Companies[0].yrs}
          />
          <Tag
            changer={this.nameChanger}
            click={this.eventHandler.bind(this, "POPO")}
            name={this.state.Companies[1].name}
            yrs={this.state.Companies[1].yrs}
          >
            but they still stink
          </Tag>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello This is a react app</h1>
        <button style={inlineStyle} onClick={this.handlerfunc}>
          Click Me!
        </button>
        {company}
      </div>
    );
  }
}

export default App;
