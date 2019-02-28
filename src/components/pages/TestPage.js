import React, { Component, Fragment } from "react";
import axios from "axios";
import { Consumer } from "../context";

class TestPage extends Component {
  // state = {
  //   users: []
  // };

  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(res => this.setState({ users: res.data }))
  //     .catch(error => console.log(error));
  // }
  render() {
    return (
      <Consumer>
        {value => {
          const { users } = value;
          const usersList = users.map((user, key) => <li key={key}>{user}</li>);
          return <ul>{usersList}</ul>;
        }}
      </Consumer>
    );
  }
}

export default TestPage;
