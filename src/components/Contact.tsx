import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/sinnan-hussain-0688b6278"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Sinnan Hussain
              </a>
            </p>
            <h4>Education</h4>
            <p>
              BS Software Engineering (In Progress), COMSATS University Islamabad, Wah Campus
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/khawajasinnan"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/sinnan-hussain-0688b6278"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://wa.me/923246018002"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/sinnan_hussain?igsh=MWxuY254a2Y5YnB2bg=="
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sinnan Hussain</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Contact;
