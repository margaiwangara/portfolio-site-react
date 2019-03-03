import React, { Component, Fragment } from "react";
import axios from "axios";
import { Consumer } from "../../statehandlers/context";

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

  state = {
    name: ""
  };

  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  clickHandler(id, dispatch) {
    dispatch({ type: "DELETE_USER", payload: id });
  }

  submitHandler(dispatch, e) {
    e.preventDefault();

    const { name } = this.state;
    const newData = {
      id: 6,
      name: "John",
      surname: name,
      age: 25
    };

    dispatch({ type: "ADD_TODO", payload: newData });
  }
  render() {
    return (
      <Consumer>
        {value => {
          const style = {
            lineHeight: "1.5rem",
            width: "50%",
            margin: "2rem auto"
          };
          const { name } = this.state;
          const { users, dispatch, contact } = value;
          const usersList = users.map((user, key) => (
            <li key={user.id}>
              {user.name}&nbsp;
              <button onClick={this.clickHandler.bind(this, user.id, dispatch)}>
                X
              </button>
            </li>
          ));
          const contactList = contact.map((contact, key) => (
            <li key={key}>{contact.name}</li>
          ));
          return (
            <React.Fragment>
              <form
                action="#"
                style={{ margin: "3rem" }}
                onSubmit={this.submitHandler.bind(this, dispatch)}
              >
                <input
                  type="text"
                  name="name"
                  onChange={this.inputHandler.bind(this)}
                  value={name}
                />
                <button style={{ padding: "0 0.3rem" }}>Add</button>
              </form>
              <ul style={style}>{usersList}</ul>
              <ul>{contactList}</ul>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default TestPage;
