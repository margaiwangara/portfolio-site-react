import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-form">
          <form action="#" method="POST" autoComplete="off">
            <div className="left">
              <h3>write me</h3>
              <span />
              <label htmlFor="name">name</label>
              <input type="text" name="name" className="form-control" />
              <label htmlFor="name">email</label>
              <input type="email" name="email" className="form-control" />
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
                />
              </div>

              <a href="#" className="btn btn-primary-filled">
                send message
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
