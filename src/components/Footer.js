import facebookLogo from "../assets/icon-facebook.svg";
import youtubeLogo from "../assets/icon-youtube.svg";
import twitterLogo from "../assets/icon-twitter.svg";
import pinterestLogo from "../assets/icon-pinterest.svg";
import instagramLogo from "../assets/icon-instagram.svg";
import logo from "../assets/logo-white.png";
import "../styles/Footer.css";
function Footer() {
  return (
    <footer className="section-padding top-padding footer">
      <div className="equal-columns">
        <div className="footer-logos">
          <img src={logo} width="146" height="24" />
          <ul className="media-links">
            <a>
              <img src={facebookLogo}></img>
            </a>

            <a>
              <img src={youtubeLogo}></img>
            </a>
            <a>
              <img src={twitterLogo}></img>
            </a>
            <a>
              <img src={pinterestLogo}></img>
            </a>
            <a>
              <img src={instagramLogo}></img>
            </a>
          </ul>
        </div>
        <div className="footer-links-wrapper">
          <ul className="footer-links">
            <li className="footer-link">
              <a>Home</a>
            </li>
            <li className="footer-link">
              <a>Pricing</a>
            </li>
            <li className="footer-link">
              <a>Products</a>
            </li>
            <li className="footer-link">
              <a>About Us</a>
            </li>
          </ul>
          <ul className="footer-links">
            <li className="footer-link">
              <a>Careers</a>
            </li>
            <li className="footer-link">
              <a>Community</a>
            </li>
            <li className="footer-link">
              <a>Privacy Policy</a>
            </li>
            <li className="footer-link blank">_</li>
          </ul>
        </div>

        <div className="footer-logos">
          <form className="footer-subscribe">
            <input
              className="input"
              type="email"
              placeholder="Updates in your inbox..."
              style={{ color: "black" }}
            ></input>
            <button className="button no-shadow">Go</button>
          </form>
          <p className="copyright">Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
