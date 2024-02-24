import facebookLogo from "../assets/icon-facebook.svg";
import youtubeLogo from "../assets/icon-youtube.svg";
import twitterLogo from "../assets/icon-twitter.svg";
import pinterestLogo from "../assets/icon-pinterest.svg";
import instagramLogo from "../assets/icon-instagram.svg";
import logo from "../assets/logo-white.png";
function Footer() {
  return (
    <footer className="section-padding top-padding footer">
      <div className="equal-columns footer-height">
        <div className="footer-logos">
          <img src={logo} width="146" height="24" />
          <ul className="media-links">
            <img src={facebookLogo}></img>
            <img src={youtubeLogo}></img>
            <img src={twitterLogo}></img>
            <img src={pinterestLogo}></img>
            <img src={instagramLogo}></img>
          </ul>
        </div>
        <div className="vertical-space-between">
          <ul className="footer-links">
            <li className="footer-link">Home</li>
            <li className="footer-link">Pricing</li>
            <li className="footer-link">Products</li>
            <li className="footer-link">About Us</li>
          </ul>
        </div>
        <div className="vertical-space-between">
          <ul className="footer-links">
            <li className="footer-link">Careers</li>
            <li className="footer-link">Community</li>
            <li className="footer-link">Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-logos">
          <form>
            <input
              className="input"
              type="email"
              placeholder="Updates in your inbox..."
              style={{ color: "black" }}
            ></input>
            <button className="butston no-shadow">Go</button>
          </form>
          <p className="copyright">Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
