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
      <General />
      {expRows}
      <button className="addBtn" onClick={() => setCount(countEdu + 1)}>
        Add
      </button>
      <button className="addBtn" onClick={() => setCount(countEdu - 1)}>
        Delete
      </button>
      {eduRows}
      <button className="addBtn" onClick={() => setCount2(countExp + 1)}>
        Add
      </button>
      <button className="addBtn" onClick={() => setCount2(countExp - 1)}>
        Delete
      </button>
    </div>
  );
}

export default App;
