import React from "react";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Row className="bg-dark p-3 shadow shadow-lg m-0">
        <Col>
          <h2 className="text-white text-center text-uppercase">The Cat API</h2>
        </Col>
      </Row>
    </>
  );
};

export default Header;
