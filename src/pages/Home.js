import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <Landing />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};
export default Home;
