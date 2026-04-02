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
                <h4>Front-End Developer Intern</h4>
                <h5>Developer's Corporation</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              6-week internship from March 2026 to April 2026. Gained hands-on experience in building user interfaces as a Front-End Developer.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End / Full-Stack Intern</h4>
                <h5>Vantage Droid</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked on responsive web UI development using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js.
              Converted mockups into reusable React components and integrated front-end with Node.js and Express.js APIs.
              Gained practical exposure to Git, Agile sprints, debugging tools, and cross-team collaboration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Continuous Learning</h4>
                <h5>Self-Taught</h5>
              </div>
              <h3>Active</h3>
            </div>
            <p>
              Actively learning about AI/ML, RAG (Retrieval-Augmented Generation), and LLM models. Participated in multiple programming and UI design competitions. Led team projects involving GUI, API integration, and DB systems. Enthusiastic learner with a strong grip on debugging and problem-solving under pressure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
