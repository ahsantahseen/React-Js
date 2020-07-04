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
      { key: "CP01", name: "Jazz", yrs: 12 },
      { key: "CP02", name: "UfONE", yrs: 25 },
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
  deleteCompaniesHandler = (CompanyIndex) => {
    const companies = [...this.state.Companies];
    companies.splice(CompanyIndex, 1);
    this.setState({ Companies: companies });
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
      company = (
        <div>
          <Ahsan />
          {this.state.Companies.map((Companies, CompanyIndex) => {
            return (
              <Tag
                click={()=> this.deleteCompaniesHandler(CompanyIndex)}
                name={Companies.name}
                yrs={Companies.yrs}
                key={Companies.key}
              ></Tag>
            );
          })}
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
