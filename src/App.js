import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Person from "./Person/Person";
import Header from "./Header";
import About from "./About";
import Mike from "./img/mike.png";
import Will from "./img/will.png";
import Lucas from "./img/lucas.png";
import Dustin from "./img/dustin.png";
import Eleven from "./img/eleven.jpg";
import Max from "./img/max.jpg";

export default class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Mike",
        quote: "Where's Eleven?",
        img: Mike
      },
      {
        id: 2,
        name: "Will",
        quote: "Can we just play DnD?",
        img: Will
      },
      {
        id: 3,
        name: "Lucas",
        quote: "Girls are just a diferent species!",
        img: Lucas
      },
      {
        id: 4,
        name: "Dustin",
        quote: "Suzie-Poo is real!",
        img: Dustin
      },
      {
        id: 5,
        name: "Eleven",
        quote: "Mike why are you lying?",
        img: Eleven
      },
      {
        id: 6,
        name: "Max",
        quote: "Eleven, Dump Mike's Ass!",
        img: Max
      }
    ]
  };

  changeName = id => {
    this.setState(prevState => {
      const updatedName = prevState.persons.map(person => {
        if (person.id === id) {
          return {
            ...person,
            name: person.name.toUpperCase()
          };
        }
        return person;
      });
      return {
        persons: updatedName
      };
    });
  };

  inputChange = (id, event) => {
    event.persist();
    this.setState(prevState => {
      const updatedName = prevState.persons.map(person => {
        if (person.id === id) {
          return {
            ...person,
            name: event.target.value
          };
        }
        return person;
      });
      return {
        persons: updatedName
      };
    });
  };

  render() {
    let personComponent = this.state.persons.map((person, index) => (
      <Person
        key={index}
        id={person.id}
        name={person.name}
        quote={person.quote}
        src={person.img}
        changeName={this.changeName}
        changed={this.inputChange}
      />
    ));
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => <React.Fragment>{personComponent}</React.Fragment>}
          />

          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
