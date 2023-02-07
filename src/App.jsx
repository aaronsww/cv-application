import React from 'react';
import './App.css'
import General from './components/General';

function App() {
      
     function handleContent(){
     return (
      <General />
     )
     }
    
  return(
    <div >
      <General /> 
      <button onClick={handleContent} type="submit">Add</button>
       
    </div>
  )
}


export default App;