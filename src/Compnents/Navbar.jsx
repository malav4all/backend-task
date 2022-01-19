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
              src="https://eliteshop.com.bd/wp-content/uploads/2021/07/logo-1.png"
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
