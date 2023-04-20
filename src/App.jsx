import React, { useState } from "react";
import "./App.css";
import General from "./components/General";
import Display from "./components/Display";

import Exp from "./components/Exp";
import ExpDisplay from "./components/ExpDisplay";

import Edu from "./components/Edu";
import EduDisplay from "./components/EduDisplay";

function App() {
  const [countExp, setCountExp] = useState(1);
  const [countEdu, setCountEdu] = useState(1);

  let expInput = [];
  let expOutput = [];
  for (let i = 0; i < countExp; i++) {
    expInput.push(<Exp />);
    expOutput.push(<ExpDisplay />);
  }

  let eduInput = [];
  let eduOutput = [];
  for (let i = 0; i < countEdu; i++) {
    eduInput.push(<Edu />);
    eduOutput.push(<EduDisplay />);
  }

  return (
    <div className="mainContainer">
      <div className="input">
        <span className="sectionTitle user-info">Personal Details</span>
        <General />
        <section className="experience">
          <div className="sectionTitle">Work Experience</div>
          {expInput}
          <button className="addBtn" onClick={() => setCountExp(countExp + 1)}>
            Add
          </button>
          <button
            className="deleteBtn"
            onClick={() => setCountExp(countExp - 1)}
          >
            Delete
          </button>
        </section>
        <section className="education">
          <div className="sectionTitle">Education</div>
          {eduInput}
          <button className="addBtn" onClick={() => setCountEdu(countEdu + 1)}>
            Add
          </button>
          <button
            className="deleteBtn"
            onClick={() => setCountEdu(countEdu - 1)}
          >
            Delete
          </button>
        </section>
      </div>

      <div className="output">
        <Display />
        <h4 className="expTitle">WORK EXPERIENCE</h4>
        {expOutput}
        <h4 className="eduTitle">EDUCATION</h4>
        {eduOutput}
      </div>
    </div>
  );
}
    
export default App;
