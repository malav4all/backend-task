import React from 'react';

const Footer = () => {
  return (
      <>
        <footer id="footer" style={{backgroundColor:"black",color:"white",padding:"40px",fontSize:"18px"}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <h6>ADDRESS</h6>
                <address>
                  <p><strong>Headquaters</strong></p>
                  <p><i className="fas fa-map-marker"></i>
                    2466H 5th Street Parking, King
                    Block, New York City.</p>
                    <p>
                      <i className="fas fa-clock"></i>
                      Timings : 10 a.m to 6 p.m
                    </p>
                    <p>
                      <i className="fas fa-phone"></i>
                      +91-7053190777
                    </p>
                    <p>
                      <i className="fas fa-envelope-open"></i>
                      <a href="mailto:info@example.com">info@eliteshoppy.com</a>
                    </p>
                </address>
              </div>

              <div className="col-lg-2">
                <h6>COMPANY</h6>
                <address>
                  <p><strong>Why Company</strong></p>
                  <p>Documentation</p>
                    <p>Business</p>
                    <p>Techinal Support</p>
                    <p>24/7 Service</p>
                    <p>FeedBack</p>
                </address>
              </div>

              <div className="col-lg-2">
                <h6>SUPPORT</h6>
                <address>
                  <p><strong>Contact Us</strong></p>
                  <p>Technical Support</p>
                    <p>24/7 Service</p>
                    <p>Privacy Policy</p>
                    <p>FeedBack & FAQ's</p>
                    <p>Term of Use</p>
                </address>
              </div>

              <div className="col-lg-3">
                <h6>NEWSLETTER</h6>
                <address>
                  <p>Subscribe to Our Newsletter to get News, Amazing Offers & More</p>
                  <form action="#">
                    <input type="text" placeholder="Enter You Email...." /><i className="fab fa-telegram-plane"></i>
                  </form>
                </address>
              </div>

              <div className="col-lg-2">
                <h6>FOLLOW US</h6>
                <address>
                  <p>Follow us on social media</p>
                  <hr />
                  <p className="links" style={{fontSize:"30px"}}>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-google-plus-g"></i>
                    <i className="fab fa-linkedin-in"></i>
                  </p>    
                </address>
              </div>
            </div>
            <div className="copy" style={{fontSize:"22px"}}>
              <p>© 2022 Elite Shoppy All Rights Reserved | Design by Malav Naagar </p>

            </div>
          </div>
        </footer>
      </>
  );
}

export default Footer;
