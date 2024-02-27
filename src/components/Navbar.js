import logo from "../assets/logo.svg";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="primary-header section-padding top-padding">
      <img src={logo} alt="manage logo" />
      <ul className="header-list">
        <li>
          <a>Pricing</a>
        </li>
        <li>
          <a>Product</a>
        </li>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>Careers</a>
        </li>
        <li>
          <a>Community</a>
        </li>
      </ul>
      <button className="button">Get Started</button>
    </nav>
  );
};
/*
    Convert to links later
*/
export default Navbar;
