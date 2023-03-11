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
    <div className="">
      <span className="sectionTitle user-info">User Information</span>
      <General />
      <Display />

      <section className="experience">
        <h4 className="expTitle">WORK EXPERIENCE</h4>
        <div className="sectionTitle">Work Experience</div>
        {expInput}
        {expOutput}
        <button className="addBtn" onClick={() => setCountExp(countExp + 1)}>
          Add
        </button>
        <button className="deleteBtn" onClick={() => setCountExp(countExp - 1)}>
          Delete
        </button>
      </section>

      <section className="education">
        <h4 className="eduTitle">EDUCATION</h4>
        <div className="sectionTitle">Education</div>
        {eduInput}
        {eduOutput}
        <button className="addBtn" onClick={() => setCountEdu(countEdu + 1)}>
          Add
        </button>
        <button className="deleteBtn" onClick={() => setCountEdu(countEdu - 1)}>
          Delete
        </button>
      </section>
    </div>
  );
}

export default App;
