import React, { useState } from "react";
import "./App.css";
import General from "./components/General";
import Exp from "./components/Exp";
import Edu from "./components/Edu";

function App() {
  const [countEdu, setCount] = useState(1);
  const [countExp, setCount2] = useState(1);

  let expRows = [];
  for (let i = 0; i < countEdu; i++) expRows.push(<Exp />);

  let eduRows = [];
  for (let i = 0; i < countExp; i++) eduRows.push(<Edu />);

  return (
    <div>
      <div className='sectionTitle'>User Information</div>
      <General />

    <section className="experience">
      <h3 className="expTitle">WORK EXPERIENCE</h3>
       <div className="sectionTitle">Work Experience</div>
        {expRows}
        <button className="addBtn" onClick={() => setCount(countEdu + 1)}>
          Add
        </button>
        <button className="deleteBtn" onClick={() => setCount(countEdu - 1)}>
          Delete
        </button>
    </section>

      <section className="education">
        <h3 className="eduTitle">EDUCATION</h3>
        <div className='sectionTitle'>Education</div>
        {eduRows}
        <button className="addBtn" onClick={() => setCount2(countExp + 1)}>
          Add
        </button>
        <button className="deleteBtn" onClick={() => setCount2(countExp - 1)}>
          Delete
        </button>
      </section>
    </div>
  );
}

export default App;
