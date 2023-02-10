import React, { useRef, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Container } from "react-bootstrap";
import Records from "./records.json";
import Home from "./Home";

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

  const check = () => {
    const user = Records.filter((record) => {
      return (
        email.current.value === record.email &&
        password.current.value === record.password
      );
    });
    console.log(email.current.value);
    localStorage.setItem("state", user);
    window.location.reload();
  };

  return (
    <div>
      {console.log(show)}
      {show ? (
        <Home />
      ) : (
        <Container className="d-flex vh-100">
          <Row className="m-auto align-self-center">
            <Card className="" style={{ width: "18rem" }}>
              <Card.Title>Login</Card.Title>
              <form onSubmit={check}>
                <div>
                  <label>Enter Email</label>
                  <br></br>
                  <input className="" type="text" ref={email} />
                </div>
                <div>
                  Enter Password
                  <input className="mb-3" type="password" ref={password} />
                </div>
                <button>Login</button>
              </form>
            </Card>
          </Row>
        </Container>
      )}
    </div>
  );
}
export default Login;
