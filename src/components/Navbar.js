import logo from "../assets/logo.svg";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="primary-header section-padding top-padding">
      <img src={logo} alt="manage logo" />
      <ul className="header-list">
        <li>Pricing</li>
        <li>Product</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Community</li>
      </ul>
      <button className="button">Get Started</button>
    </nav>
  );
};
/*
    Convert to links later
*/
export default Navbar;
