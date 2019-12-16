import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
// {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}

const SuccessAlert = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Success!</Alert.Heading>
        <p>Thanks for contacting! We' ll get back to you asap.</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
    </>
  );
};

export default SuccessAlert;
