import React from "react";
import { Form, Button } from "react-bootstrap";

function Login() {
  return (
    <>
      <h2 style={{marginTop: "50px", fontWeight: "900"}}>Login</h2>
      <Form>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="phone" placeholder="Enter phone number" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{marginTop: "20px"}}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Login;
