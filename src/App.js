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
  deleteCompaniesHandler = (CompanyIndex) =>{
    const companies=this.state.Companies;
    companies.splice(CompanyIndex,1);
  this.setState({companies:companies})
  }
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
          <Ahsan  />
          {this.state.Companies.map((showFunc) => {
            return <Tag click={this.deleteCompaniesHandler} name={showFunc.name} yrs={showFunc.yrs}></Tag>;
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
