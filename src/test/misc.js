import React, { Component } from "react";
import classes from "./Form.module.css";

class Form extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      status: ""
    };
  }
  */
  state = {
    status: ""
  };
  submitForm = async ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    console.log(data);

    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
        console.log(this.state.status);
        console.log(data);
      } else {
        this.setState({ status: "ERROR" });
        console.log(this.state.status);
        console.log(data);
      }
    };
    xhr.send(data);
  };

  render() {
    const { status } = this.state;
    return (
      <form
        className={classes.Form}
        onSubmit={this.submitForm}
        action="https://formspree.io/xyyzobwa" //New Form
        method="POST"
      >
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <input type="text" name="message" />
        {status === "SUCCESS" ? (
          <p>Thanks for contacting!</p>
        ) : (
          <button>Submit</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }
}
export default Form;
