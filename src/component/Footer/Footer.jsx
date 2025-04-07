import React from "react";
import "./Footer.css"; // Import CSS file for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blogs</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact Us</a></li>
              {/* <li><a href="#">Shark Tank</a></li> */}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Locations</h4>
            <ul>
              <li><a href="#">Daladali Chowk</a></li>
              {/* <li><a href="#">Noida</a></li>
              <li><a href="#">Jaipur</a></li>
              <li><a href="#">Gr. Noida</a></li>
              <li><a href="#">Gurgaon</a></li>
              <li><a href="#">Ghaziabad</a></li> */}
            </ul>
          </div>

          <div className="footer-logo">
            <img src="https://pushsports.in/wp-content/uploads/2024/05/PUSH-Logo-New-Final-Color_white-2048x741.png" alt="Push Sports Logo" />
            <p>INDIA'S NEW PLAYGROUND</p>
            <div className="social-icons">
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="Facebook" /></a>
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" /></a>
              <a href="#"><img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMy0xMC5wbmc.png" alt="LinkedIn" /></a>
              <a href="#"><img src="https://cdn-icons-png.freepik.com/256/1384/1384060.png?semt=ais_hybrid" alt="YouTube" /></a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Franchise</a></li>
              <li><a href="#">School Hub</a></li>
              <li><a href="#">Membership</a></li>
              <li><a href="#">Pay to Play</a></li>
              <li><a href="#">Sports Academy</a></li>
              <li><a href="#">School Infrastructure</a></li>

              
          
            </ul>
          </div>

          <div className="footer-column">
            <h4>Policies</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cancellation</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Shipping & Other T&C</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Ars Kreedashala | <a href="#">Privacy & Terms</a> | <a href="#">Terms & Conditions</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
