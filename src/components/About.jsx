import avatar from "../assets/avatar.png";

import fptLogo from "../assets/fpt_logo.png";
import vnptLogo from "../assets/vnpt_logo.png";
import lgLogo from "../assets/lg_logo.png";
import React from "react";

const About = () => {
  const handleDownload = () => {
    const url = `https://minhduclehust.github.io/Portfolio/CV_LeMinhDuc.pdf`;
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV_LeMinhDuc.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="about-grid">
      {/* Personal Info */}
      <div className="about-card">
        <h4>👤 Personal Info</h4>
        <div className="personal-info">
          <img src={avatar} alt="Avatar" className="personal-avatar" />
          <div className="info-details">
            <p>
              <strong>Name:</strong> Duc Le Minh
            </p>
            <p>
              <strong>Position:</strong> Embedded Software Engineer
            </p>
            <p>
              <strong>Location:</strong> Hanoi, Vietnam
            </p>
            <p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email Logo"
                style={{
                  width: "20px",
                  height: "20px",
                  verticalAlign: "middle",
                  marginRight: "8px",
                }}
              />
              Email: minhduc2082k@gmail.com
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/minhduc2082k/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn Logo"
                  style={{
                    width: "20px",
                    height: "20px",
                    verticalAlign: "middle",
                    marginRight: "8px",
                  }}
                />
                {/* LinkedIn: linkedin.com/in/yourname */}
              </a>
            </p>
            <p>
              <a
                href="https://github.com/MinhDucLeHUST"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub Logo"
                  style={{
                    width: "20px",
                    height: "20px",
                    verticalAlign: "middle",
                    marginRight: "8px",
                  }}
                />
                {/* GitHub: github.com/yourusername */}
              </a>
            </p>
            <button className="download-btn" onClick={handleDownload}>
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="about-card">
        <h4>💼 Work Experience</h4>

        <div className="work-card">
          <a
            href="https://fptsoftware.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fptLogo} alt="FPT Logo" className="company-logo" />
          </a>
          <div>
            <strong>FPT Software</strong>
            <p>Position: Developer</p>
            <p>Feb 2022 – Mar 2023</p>
          </div>
        </div>

        <div className="work-card">
          <a
            href="https://www.vnpt-technology.vn/vi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={vnptLogo} alt="VNPT Logo" className="company-logo" />
          </a>
          <div>
            <strong>VNPT Technology</strong>
            <p>Position: Developer</p>
            <p>Apr 2023 – Oct 2023</p>
          </div>
        </div>

        <div className="work-card">
          <a
            href="https://www.facebook.com/LGEDV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={lgLogo} alt="LG Logo" className="company-logo" />
          </a>
          <div>
            <strong>LG Electronics Development Vietnam</strong>
            <p>Position: Developer</p>
            <p>Oct 2023 – Jul 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
