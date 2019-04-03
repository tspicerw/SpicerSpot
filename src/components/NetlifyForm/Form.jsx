import React, { Component } from "react";

class NetlifyForm extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <form method="post" action="POST" data-netlify="true">
          <div className="fields">
            <div className="field">
              <label for="name">Name</label>
              <input className="form-input" type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label for="email">Email</label>
              <input
                className="form-input"
                type="text"
                name="email"
                id="email"
              />
            </div>
            <div className="field">
              <label for="file">Upload Job Description</label>
              <input type="file" name="myfile" id="myfile" />
            </div>
            <div className="field">
              <div data-netlify-recaptch="true" />
            </div>
            <div className="field">
              <label for="message">Message</label>
              <textarea
                className="form-input"
                name="message"
                id="message"
                rows="3"
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default NetlifyForm;
