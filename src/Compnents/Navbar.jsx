/* eslint-disable */
import React,{useState,useEffect} from "react";
import {Navbar,Container,Nav,FormControl,Form,Button, Row, Col} from "react-bootstrap"
import "../assests/css/modern.css"
import LoginModal from "./Modals/LoginModal";
import RegisterModal from "./Modals/RegisterModal";
import { useDispatch, useSelector,useHistory, useLocation } from "react-redux";
import decode from 'jwt-decode';
export const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  const [registermodalShow, setRegisterModalShow] = useState(false);
  const loginUser = useSelector((user) => user.auth);
  console.log({loginUser})
  useEffect(() => {
    const token = loginUser?.data;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime());
    }

    // setUser(JSON.parse(localStorage.getItem('accessToken')));
  }, [location]);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="header" fixed="top">
        <Container>
          <Navbar.Brand>
            <img
              alt="logo"
              src="https://cdn.shopify.com/s/files/1/0274/8999/2807/files/Become_Elite_TSHIRT_Black_Back_Logo_700x.png?v=1574220078"
              width="70"
              height="50"
              className="d-inline-block align-center"
              // style={{ borderRadius: "30px" }}
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
              <Button variant="light">Search</Button>{" "}
            </Form>
          </Nav>
          <Nav>
            {loginUser?.data ? (<p>Welcome{loginUser.data.name}</p>):( <Row className="justify-content-md-center">
              <Col xs>
                <Nav>
                  <Button variant="danger" onClick={() => setModalShow(true)}>
                    Login
                  </Button>
                  <LoginModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Nav>
              </Col>
              <Col>
                <Nav>
                  <Button
                    variant="info"
                    onClick={() => setRegisterModalShow(true)}
                  >
                    Register
                  </Button>
                  <RegisterModal
                    show={registermodalShow}
                    onHide={() => setRegisterModalShow(false)}
                  />
                </Nav>
              </Col>
            </Row>)}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
