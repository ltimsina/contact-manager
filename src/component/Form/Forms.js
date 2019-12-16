import React, { Component } from "react";
import classes from "./Form.module.css";
import { Button, Form } from "react-bootstrap";
import SuccessAlert from "./SuccessAlert";
import FailureAlert from "./FailureAlert";

class Forms extends Component {
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
  submitForm = e => {
    e.preventDefault();
    console.log("submit");
    const Form = e.target;
    const data = new FormData(Form); //Form: bootstrap form
    console.log(data);

    const xhr = new XMLHttpRequest();
    xhr.open(Form.method, Form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        Form.reset();
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
      <div>
        <Form
          className={classes.Form}
          onSubmit={this.submitForm}
          action="https://formspree.io/xyyzobwa" //New Form
          method="POST"
        >
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Enter email..."
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control required as="textarea" name="message" rows="3" />
          </Form.Group>

          {status === "SUCCESS" ? (
            <SuccessAlert />
          ) : (
            <Button variant="primary" type="submit">
              Send
            </Button>
          )}
          {status === "ERROR" && <FailureAlert />}
        </Form>
      </div>
    );
  }
}
export default Forms;
