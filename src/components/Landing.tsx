import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SINNAN
              <br />
              <span>HUSSAIN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3 className="landing-subtitle">Software Engineer &</h3>
            <h2 className="landing-title-1">Open to work</h2>
            <h2 className="landing-title-2">QA Engineer</h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
