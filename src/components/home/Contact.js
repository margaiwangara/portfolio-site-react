import React, { Component } from "react";
import { Consumer } from "../../statehandlers/context";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.inputHandler = this.inputHandler.bind(this);
  }
  onContactFormSubmit(dispatch, e) {
    e.preventDefault();

    const { name, email, message } = this.state;

    const newMessage = {
      name: name,
      email: email,
      message: message
    };
    dispatch({
      type: "SEND_MESSAGE",
      payload: newMessage
    });

    // Reset state
    this.setState({
      name: "",
      email:"", 
      message: ""
    })
  }
  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { name, email, message } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          
          return (
            <div className="contact">
              <div className="contact-form">
                <form
                  action="#"
                  method="POST"
                  autoComplete="off"
                  onSubmit={this.onContactFormSubmit.bind(this, dispatch)}
                >
                  <div className="left">
                    <h3>write me</h3>
                    <span />
                    <label htmlFor="name">name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={name}
                      onChange={this.inputHandler}
                    />
                    <label htmlFor="name">email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={this.inputHandler}
                    />
                  </div>
                  <div className="right">
                    <div className="text-area">
                      <label htmlFor="message">message</label>
                      <textarea
                        name="message"
                        cols="30"
                        rows="15"
                        className="form-control"
                        placeholder="Write Text Here"
                        value={message}
                        onChange={this.inputHandler}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary-filled">
                      send message
                    </button>
                  </div>
                </form>
              </div>
             
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
