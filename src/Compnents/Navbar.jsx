/* eslint-disable */
import React from "react";
import {Navbar,Container,Nav,FormControl,Form,Button} from "react-bootstrap"
import "../assests/css/modern.css"
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="header">
        <Container>
          <Navbar.Brand>
            <img
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5crR8T6ymsm2WCisUc58ReSKQlVJTFTo3PQ&usqp=CAU"
              width="50"
              height="50"
              className="d-inline-block align-center"
              style={{ borderRadius: "30px" }}
            />{" "}
            <span id="title">Elite Shoppy</span>
          </Navbar.Brand>
          <Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="secondary">Search</Button>{' '}
            </Form>
          </Nav>
          <Nav>
            <Nav>Login</Nav>
            <Nav>
              Register
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
