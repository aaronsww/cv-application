import React , {useState} from 'react';
import './App.css'
import General from './components/General';

function App() {
      
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  function displayAgain()
  {
    if(count !=0 && count < 5)
    return <General/>
  }
    
  return(
    <div >
      <General /> 
      {/* <button onClick={handleContent} type="submit">Add</button> */}
      <div>{count}</div>
      <button onClick={incrementCount}>Increment</button>
      {displayAgain()}
    </div>
  )
}

export default App;