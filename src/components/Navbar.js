import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="primary-header section-padding top-padding">
      <img src={logo} />
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
