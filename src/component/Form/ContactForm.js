import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    error: ""
  };
  handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.target);
    // https://formspree.io/xledzwnw
    fetch("https://formspree.io/xyyzobwa", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response);
        if (response.ok) {
          console.log("reponse ok");
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ error: "successfully sent" }))
      .catch(error => this.setState({ error }));

    console.log(this.state.error);
    /*
    fetch("https://formspree.io/xyyzobwa", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        const myData = response.json();
        console.log(myData);
        return response.json();
      })
      .then(function(data) {
        //Success code goes here
        alert("form submited");
      })
      .catch(function(err) {
        //Failure
        alert("Error");
      });
      */

    // fetch("https://formspree.io/xyyzobwa", {
    // method: "POST",
    //body: data;
    //});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="message">Enter your message</label>
        <input id="message" name="message" type="text" />

        <button>Send</button>
      </form>
    );
  }
}
export default ContactForm;
