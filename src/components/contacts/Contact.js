import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    //this.setState({ showContactInfo: !this.state.showContactInfo });
    // below is the safe way to do like above
    this.setState(prevState => ({
      showContactInfo: !prevState.showContactInfo
    }));
    //console.log(this.state.showContactInfo);
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }

    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, email, name, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-2">
              <h4>
                {name}
                <i
                  onClick={this.onShowClick}
                  className="fa fa-sort-down"
                  style={{ cursor: "pointer", color: "green" }}
                />
                <i
                  className="fa fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`/contact/edit/${id}`}>
                  <i
                    className="fa fa-pencil"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.defaultProps = {
  name: "default name",
  email: "default email",
  phone: "default phone"
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  //deleteClickHandler: PropTypes.func.isRequired
};
export default Contact;
