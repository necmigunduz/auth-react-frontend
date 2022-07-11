import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://localhost:8080/signup",
      data: {
        username,
        email,
        phone,
        password
      },
    };
    axios(configuration)
        .then((response) => {
          setSignup(true);
          console.log(response);
          setMessage(response.data.message);
        })
        .catch((error) => {
          error = new Error();
          console.log(error)
        })
  };

  return (
    <>
      <h2 style={{ marginTop: "50px", fontWeight: "900" }}>Signup</h2>
      <Form className="bg-light p-3 border rounded" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="username-signup">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            name="username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email-signup">
          <Form.Label>Email adress</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email adress"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="phone-signup">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your phone number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password-signup">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)} style={{ marginTop: "20px" }}>
          Submit
        </Button>
      </Form>
      <div style={{marginTop: "20px"}}>
        {signup ? <p className="text-success">{message}</p> : <p className="text-danger">You are not signed up!</p>}
      </div>
    </>
  );
}

export default Signup;
