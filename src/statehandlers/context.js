import React, { Component } from "react";

import { reducer } from "./rootReducer";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contact: [
      {
        name: "margaiwangara",
        email: "margaiwangara@lazyloading.com",
        message: "this is a sample text message for dev purposes"
      }
    ],
    users: [
      {
        id: 1,
        name: "John",
        surname: "Doe",
        age: 25
      },
      {
        id: 2,
        name: "Jane",
        surname: "Doe",
        age: 22
      },
      {
        id: 3,
        name: "Peter",
        surname: "Parker",
        age: 17
      },
      {
        id: 4,
        name: "Margai",
        surname: "Wangara",
        age: 17
      },
      {
        id: 5,
        name: "Hamid",
        surname: "Kanu",
        age: 17
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
