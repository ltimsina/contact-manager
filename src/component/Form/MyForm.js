import React, { useState } from "react";
import axios from "axios";

const MyForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    //https://formspree.io/xledzwnw
    axios({
      method: "post",
      url: "https://formspree.io/xledzwnw",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks for contacting!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit" disabled={serverState.submitting}>
          Submit
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
};

export default MyForm;
