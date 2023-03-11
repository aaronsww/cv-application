import React, { useState } from "react";
import "./App.css";
import General from "./components/General";
import Display from "./components/Display";

import Exp from "./components/Exp";

import Edu from "./components/Edu";
import EduDisplay from "./components/EduDisplay";

function App() {
  const [countExp, setCount] = useState(1);
  const [countEdu, setCount2] = useState(1);

  let expRows = [];
  for (let i = 0; i < countExp; i++) expRows.push(<Exp />);

  let eduInput = [];
  let eduOutput = [];
  for (let i = 0; i < countEdu; i++) 
  {
    eduInput.push(<Edu />);
    eduOutput.push(<EduDisplay/>)
  }

  return (
    <div className="">
      <span className="sectionTitle user-info">User Information</span>
      <General />
      <Display />
      <Edu />
      <EduDisplay/>

      {/* <section className="experience">
        <h4 className="expTitle">WORK EXPERIENCE</h4>
        <div className="sectionTitle">Work Experience</div>
        {expRows}
        <button className="addBtn" onClick={() => setCount(countExp + 1)}>
          Add
        </button>
        <button className="deleteBtn" onClick={() => setCount(countExp - 1)}>
          Delete
        </button>
      </section> */}

      {/* <section className="education">
        <h4 className="eduTitle">EDUCATION</h4>
        <div className='sectionTitle'>Education</div>
        {eduInput}
        {eduOutput}
        <button className="addBtn" onClick={() => setCount2(countEdu + 1)}>
          Add
        </button>
        <button className="deleteBtn" onClick={() => setCount2(countEdu - 1)}>
          Delete
        </button>
      </section>  */}
    </div>
  );
}

export default App;
