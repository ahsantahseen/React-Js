import React, { Component } from "react";
import classes from "./App.module.css";
import "./Ahsan/Ahsan";

import Tag from "./Ahsan/Tag";
import "./Ahsan/Tag.css";

class App extends Component {
  state = {
    Companies: [
      { key: "CP01", name: "Jazz", yrs: 12 },
      { key: "asd2", name: "UfONE", yrs: 25 },
      { key: "asd13", name: "Bykea", yrs: 14 },
    ],
    showCompanies: false,
  };
  nameChanger = (event, key) => {
    const CompaniesIndex = this.state.Companies.findIndex((p) => {
      return (p.key = key);
    });

    const Companies = { ...this.state.Companies[CompaniesIndex] };

    Companies.name = event.target.value;

    const Company = [...this.state.Companies];
    Company[CompaniesIndex] = Companies;
    this.setState({ Companies: Company });
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
    let BtnClass = [classes.Button];
    let company = null;
    if (this.state.showCompanies) {
      company = (
        <div>
          {this.state.Companies.map((Companies, CompanyIndex) => {
            return (
              <Tag
                click={() => this.deleteCompaniesHandler(CompanyIndex)}
                name={Companies.name}
                yrs={Companies.yrs}
                key={Companies.key}
                change={(event) => this.nameChanger(event, Companies.key)}
              ></Tag>
            );
          })}
        </div>
      );

      BtnClass.push(classes.Red);
    }
    const assignedClass = [];
    if (this.state.Companies.length <= 2) {
      assignedClass.push(classes.style1);
    }
    if (this.state.Companies.length <= 1) {
      assignedClass.push(classes.style2);
    }
    if (this.state.Companies.length === 0) {
      assignedClass.push(classes.style3);
    }
    return (
      <div className={classes.App}>
        <h1>Hello This is a react app</h1>
        <p className={assignedClass.join(" ")}>
          Hello! I'm Ahsan and i made this custom component
        </p>
        <button className={BtnClass.join(" ")} onClick={this.handlerfunc}>
          Click Me!
        </button>
        {company}
      </div>
    );
  }
}

export default App;
