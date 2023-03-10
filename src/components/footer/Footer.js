import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        width: "100%",
        position: "relative",
        bottom: 0,
        justifyContent: "center",
        backgroundColor: "rgb(233, 255, 219)",
        color: "rgb(7, 4, 29)",
      }}
    >
      <Row>
        <Col>Copyright &copy; Sajhau,2023</Col>
      </Row>
    </footer>
  );
};

export default Footer;
