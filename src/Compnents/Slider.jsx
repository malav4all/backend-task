/* eslint-disable */
import React from 'react'
import  {Carousel,Container,Row} from "react-bootstrap"
const Slider = () => {
    return (
      <>
          <Container fluid aria-expanded>
              <Row className="justify-content-md-center">
                  <Carousel >
                  <Carousel.Item interval={1000}>
                      <img
                        style={{
                            width: "1679px",
                            height: "600px"
                        }}
                        src="https://images.unsplash.com/photo-1604145187954-249d15732a10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                        alt="First slide"
                      />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      style={{
                        width: "1679px",
                        height: "600px"
                    }}
                      src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "1679px",
                        height: "600px"
                    }}
                      src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "1679px",
                        height: "600px"
                    }}
                      src="https://i.pinimg.com/736x/66/d6/d3/66d6d3818b2dce1ee0ade72a94d4da8f.jpg"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>Fourth slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Row>
          </Container>
      </>
    );
}

export default Slider
