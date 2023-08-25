import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//------------------------------------------
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="h1 text-decoration-underline" href="#home">
          APPLE/STORE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto h4 ">
            <Nav.Link href="#">MacBook</Nav.Link>
            <Nav.Link href="#">Iphone</Nav.Link>
            <Nav.Link href="#">AirPod</Nav.Link>
            <Nav.Link href="#">Watch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function Recherche() {
  return (
    <Navbar className="bg-body-tertiary  justify-content-around py-3">
      <Form inline>
        <InputGroup>
          <Button type="submit">Code Promo</Button>
          <Form.Control
            placeholder="Rensignez votre code"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Ecrivez quelque chose"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Rechercher</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}
