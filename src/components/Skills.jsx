import React from "react";

const Skills = () => {
  return (
    <div className="skills-grid">
      {/* Language */}
      <div className="skill-group">
        <h4>📝 Language</h4>
        <ul>
          <li>TOEIC Certificate 600</li>
          <li>Good at communication</li>
        </ul>
      </div>

      {/* Programming */}
      <div className="skill-group">
        <h4>💻 Programming</h4>
        <ul>
          <li>C / C++</li>
          <li>Python, JavaScript</li>
          <li>Script language: Bash, Shell</li>
        </ul>
      </div>

      {/* Microcontrollers */}
      <div className="skill-group">
        <h4>⚡ Microcontrollers</h4>
        <ul>
          <li>STM32</li>
          <li>ESP32 / ESP32 IDF</li>
          <li>Arduino</li>
          <li>Renesas</li>
        </ul>
      </div>

      {/* Others / Tools */}
      <div className="skill-group">
        <h4>🔧 Others / Tools</h4>
        <div className="skills-cards">
          {/* Communication Protocols */}
          <div className="skill-card">
            <strong>Communication Protocols</strong>
            <ul>
              <li>Application Layer: MQTT</li>
              <li>Physical & Data Link Layer: UART, I2C, SPI</li>
            </ul>
          </div>

          {/* Document Writing */}
          <div className="skill-card">
            <strong>Document Writing</strong>
            <p>HLD, SRS, Test case</p>
          </div>

          {/* Git */}
          <div className="skill-card">
            <strong>Git</strong>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
