import React, {useState} from 'react';
import '../App.css'

function General() {

  const[info, setInfo] = useState({name: '', post: '',phoneNo: '',email: '', description: ''})
  
  function handleInfo(e, infor) {
    console.log(infor)
    setInfo({ ...info, name : e.target.value})
  }
  return(
      <div className='mainContainer'>
        <form>
          <input type='text' value={info.name} onChange={(e) => handleInfo(e, info.name)}/>
          <input type='text' value={info.post} onChange={e => setInfo({...info, post : e.target.value})}/>
          <input type='number' value={info.phoneNo} onChange={e => setInfo({...info, phoneNo : e.target.value})}/>
          <input type='email' value={info.email} onChange={e => setInfo({...info, email : e.target.value})}/>
          <textarea type='text' value={info.description} onChange={e => setInfo({...info, description : e.target.value})}/> 
        </form>
        <div>
          <h1>name: {info.name}</h1>
          <p>post: {info.post}</p>
          <p>number: {info.phoneNo}</p>
          <p>email: {info.email}</p>
          <p>description: {info.description}</p>
          <h1>{ JSON.stringify(info)}</h1>
        </div>
      </div>
  )
}

export default General;  