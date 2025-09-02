import React from "react";

const Projects = () => {
  return (
    <div className="about-grid">
      {/* Graduation Project */}
      <div className="about-card">
        <h4>Graduation Project</h4>
        <p>
          <strong>Name:</strong> Design Smart Lock integrated Anti-thief mode
          for apartment
        </p>
        <p>
          <strong>Working time:</strong> Oct 2022 – Feb 2023
        </p>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>Design a lock that has multiple ways to open the door</li>
          <li>Anti-thief mode controllable via smartphone</li>
          <li>Device includes warning function to notify owner</li>
          <li>Design circuit and handle algorithm/data for system</li>
          <li>Build app to control and monitor device</li>
        </ul>
        <p>
          <strong>Technologies:</strong> C/C++, Altium, Arduino, ESP32, Firebase
          (DB)
        </p>
      </div>

      {/* FPT Software */}
      <div className="about-card">
        <h4>FPT Software</h4>
        <p>
          <strong>Working time:</strong> Feb 2022 – Mar 2023
        </p>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>Building web interface using HTTP to monitor device</li>
          <li>Building firmware for Air purifier</li>
          <li>
            Programmable control of HMI states using Rotary Encoder and Touch
            Sensor
          </li>
          <li>Writing Makefile for HMI tasks</li>
        </ul>
        <p>
          <strong>Technologies:</strong> Renesas RL78 (C Programming), Git,
          Makefile
        </p>
      </div>

      {/* VNPT Technology */}
      <div className="about-card">
        <h4>VNPT Technology - Smart Home</h4>
        <p>
          <strong>Working time:</strong> Apr 2023 – Oct 2023
        </p>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>IP Camera: Build test tool</li>
          <li>
            IR Blaster: Write SRS, program functions, collect data, write test
            cases
          </li>
          <li>
            Gateway (Linux C/C++): Develop/debug functions, write test cases,
            add SRS documents
          </li>
        </ul>
        <p>
          <strong>Technologies:</strong> C, C++, JavaScript, Shell Script,
          ESP32, MQTT, ZigBee, Bluetooth, WiFi
        </p>
      </div>

      {/* LG Electronics */}
      <div className="about-card">
        <h4>LG Electronics Development Vietnam - Home Appliance</h4>
        <p>
          <strong>Working time:</strong> Oct 2023 – Now
        </p>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>
            Develop features for Refrigerator: handle message queue, optimize
            logic
          </li>
          <li>Restructure solutions, move specific model to common model</li>
          <li>
            Unit test for fridge functions: update CMakeLists and build workflow
            unit tests
          </li>
        </ul>
        <p>
          <strong>Technologies:</strong> C, C++, Renesas, UART, Scripts on
          PowerShell & Linux
        </p>
      </div>
    </div>
  );
};

export default Projects;
