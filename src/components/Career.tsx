import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist Intern</h4>
                <h5>Projects & Experience</h5>
              </div>
              <h3>APR 2025 - DEC 2025</h3>
            </div>
            <p>
              Hands-on experience in machine learning, data analysis, and ETL workflows.
              Skilled in building predictive models, automating data pipelines, and
              delivering actionable insights using Python, SQL, and modern ML libraries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
