import illustrationIntro from "../assets/illustration-intro.svg";
import "../styles/Landing.css";
function Landing() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="equal-columns landing top-margin">
          <div className="left-column top-padding">
            <h1 className="primary-heading">
              Bring everyone together to build better products.
            </h1>
            <p className="caption">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="button">Get Started</button>
          </div>
          <div className="right-column">
            <img src={illustrationIntro} alt=""></img>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Landing;
