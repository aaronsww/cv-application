import React, {useState} from 'react';
import '../App.css'
import Display from './Display';

function General() {

  const[info, setInfo] = useState({name: '', post: '',phoneNo: '',email: '', description: ''})
  
  function handleInfo(e, infor) {
    console.log(infor)
    setInfo({ ...info, name : e.target.value})
  }
  return(
      <div className='mainContainer'>
        <div>
            <fieldset>
              <legend>User Information</legend>
              <input type='text' value={info.name} onChange={(e) => handleInfo(e, info.name)}/>
              <input type='text' value={info.post} onChange={e => setInfo({...info, post : e.target.value})}/>
              <input type='number' value={info.phoneNo} onChange={e => setInfo({...info, phoneNo : e.target.value})}/>
              <input type='email' value={info.email} onChange={e => setInfo({...info, email : e.target.value})}/>
              <textarea type='text' value={info.description} onChange={e => setInfo({...info, description : e.target.value})}/>
            </fieldset>
        </div>
            <Display data={info} />
      </div>
  )
}

export default General;  
