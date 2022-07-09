import React from "react";
import { Form, Button } from "react-bootstrap";

function Signup() {
  return (
    <>
      <h2 style={{ marginTop: "50px", fontWeight: "900" }}>Signup</h2>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter your username" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email adress</Form.Label>
          <Form.Control type="email" placeholder="Enter your email adress" />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="number" placeholder="Enter your phone number" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: "20px" }}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Signup;
