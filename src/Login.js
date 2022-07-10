import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://auth-node-backend.herokuapp.com/login",
      data: {
        phone,
        password,
      },
    };
    axios(configuration)
        .then((response) => {
          setLogin(true);
          console.log(response);
        })
        .catch((error) => {
          error = new Error();
          console.log(error);
        })
  }
  return (
    <>
      <h2 style={{ marginTop: "50px", fontWeight: "900" }}>Login</h2>
      <Form className="bg-light p-3 border rounded" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="phone"
            name="phone"
            value={phone}
            placeholder="Enter phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)} style={{ marginTop: "20px" }}>
          Submit
        </Button>
      </Form>
      <div style={{marginTop: "20px"}}>
        {login ? <p className="text-success">You logged in successfully!</p> : <p className="text-danger">Unsuccessful try! Please check your phone number and your password!</p>}
      </div>
    </>
  );
}

export default Login;
