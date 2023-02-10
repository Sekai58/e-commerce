import React, { useRef, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import Records from "./records.json";
import Home from "./Home";
import "../App.css";

function Login() {
  const email = useRef();
  const password = useRef();
  const localState = localStorage.getItem("state");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (localState) {
      setShow(true);
    }
  }, [localState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = Records.filter((record) => {
      return (
        email.current.value === record.email &&
        password.current.value === record.password
      );
    });
    localStorage.setItem("state", user);
    window.location.reload();
  };

  return (
    <div>
      {show ? (
        <Home />
      ) : (
        <div className="d-flex color-bg vw-100 vh-100">
          <Row className="m-auto align-self-center">
            <Card className="p-4 crd" style={{ width: "18rem" }}>
              <Card.Title>Login</Card.Title>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Enter Email</label>
                  <br></br>
                  <input className="mb-3 p-1 inp" type="text" ref={email} />
                </div>
                <div>
                  Enter Password
                  <input
                    className="mb-3 p-1 inp"
                    type="password"
                    ref={password}
                  />
                </div>
                <button className="btn">Login</button>
              </form>
            </Card>
          </Row>
        </div>
      )}
    </div>
  );
}
export default Login;
