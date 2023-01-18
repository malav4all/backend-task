/* eslint-disable */
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "../assests/css/modern.css";
import LoginModal from "./Modals/LoginModal";
import RegisterModal from "./Modals/RegisterModal";
import { useNavigate } from "react-router-dom";
import {
  useDispatch,
  useSelector,
  useHistory,
  useLocation,
  connect,
} from "react-redux";
// import decode from 'jwt-decode';
const Header = (props) => {
  const navigate = useNavigate();
  const data = JSON.parse(
    window && window.sessionStorage.getItem("userDetails")
  );
  console.log({ data });
  const [modalShow, setModalShow] = useState(false);
  const [registermodalShow, setRegisterModalShow] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, []);
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
            <Row className="justify-content-md-center">
              <Col xs>
                <Nav>
                  <Button variant="danger" onClick={() => setLoginModalShow(true)}>
                    Login
                  </Button>
                  <LoginModal
                    show={loginModalShow}
                    onHide={() => setLoginModalShow(false)}
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
            </Row>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    myitems: state.auth.user,
  };
};
export default connect(mapStateToProps)(Header);
