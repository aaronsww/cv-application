import React , {useState} from 'react';
import './App.css'
import General from './components/General';
import Exp from './components/Exp';
import Edu from './components/Edu';

function App() {
      
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  function displayAgain()
  {
    if(count !=0 )
    return <Exp/>
  }

  function displayAgain2()
  {
    if(count !=0 )
    return <Edu/>
  }
    
  return(
    <div >
      <General /> 
      <Exp/>
      {displayAgain()}
        <button onClick={incrementCount}>Add</button>
      <Edu/>
      {displayAgain2()}
        <button onClick={incrementCount}>Add</button>
    </div>
  )
}

export default App;