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
     <div className="sectionTitle">Work Experience</div>
      {expRows}
      <button className="addBtn" onClick={() => setCount(countEdu + 1)}>
        Add
      </button>
      <button className="deleteBtn" onClick={() => setCount(countEdu - 1)}>
        Delete
      </button>

      <div className='sectionTitle'>Education</div>
      {eduRows}
      <button className="addBtn" onClick={() => setCount2(countExp + 1)}>
        Add
      </button>
      <button className="deleteBtn" onClick={() => setCount2(countExp - 1)}>
        Delete
      </button>
    </div>
  );
}

export default App;
