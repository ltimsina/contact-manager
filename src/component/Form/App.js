import React, { Component } from "react";
import "./App.css";
import Forms from "./component/Form/Forms";
import ContactForm from "./component/Form/ContactForm";
//import ContactForm from "./component/Form/ContactForm";
//import MyForm from "./component/Form/MyForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactForm />
      </div>
    );
  }
}
export default App;

/*
import React, { Component } from "react";
import axios from "axios";
import "./component/Form/styles.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        message: ""
      },
      isSubmitting: false,
      isError: false
    };
  }

  submitForm = async e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });
    try {
      const { data } = await axios.post("https://formspree.io/xyyzobwa", {
        ...this.state.values
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: "",
          values: { email: "", password: "" }
        }),
      1600
    );
  };

  handleInputChange = e =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <div className="input-group">
            <label htmlFor="email">E-mail Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.values.email}
              onChange={this.handleInputChange}
              title="Email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              onChange={this.handleInputChange}
              title="password"
              required
            >
              {this.state.values.message}
            </textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        <div className={`message ${this.state.isError && "error"}`}>
          {this.state.isSubmitting ? "Submitting..." : this.state.message}
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Contact US</h1>
      <ContactForm />
    </div>
  );
}
export default App;
*/
