import "../styles/Features.css";
function Features() {
  return (
    <section className="section-padding">
      <div className="equal-columns inverted top-margin">
        <div className="left-column">
          <h2 className="secondary-heading">{`What's different about Manage?`}</h2>
          <p className="caption">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="right-column">
          <ol className="numbered-list vertical-space-between">
            <li>
              <h3 className="numbered-item">Track company-wide progress</h3>
              <p className="caption numbered-item-caption">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress sat the milestone level all the way done to
                the smallest of details. Never lose sight of the bigger picture
                gain.
              </p>
            </li>
            <li>
              <h3 className="numbered-item">Advanced built-in reports</h3>
              <p className="caption numbered-item-caption">
                Set internal delivery estimates and track progress towards
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </li>
            <li>
              <h3 className="numbered-item">
                Everything you need in one place
              </h3>
              <p className="caption numbered-item-caption">
                Stop jumping from one service to another to communicate, store
                files, track tasks, and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
export default Features;
