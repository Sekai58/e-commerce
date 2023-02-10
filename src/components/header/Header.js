import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <Navbar className="nav color-white" expand="lg" variant="light">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "cursive",
                fontSize: "italic",
              }}
              variant="light"
            >
              Sajhau
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto"></Nav>
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/carts">
                Carts<span className="total-cart">(10)</span>
              </Nav.Link>
              <Nav.Link onClick={handleClick} href="/">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
