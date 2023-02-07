import React, {useState} from 'react';
import '../App.css'
import Display from './Display';
import ExpDisplay from './ExpDisplay';

function General() {

  const[info, setInfo] = useState({name: '', post: '',phoneNo: '',email: '', description: ''})
  const[expInfo, setExpInfo] = useState({company: '', position: '',start: '',end: '', expDescription: ''})
  
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
            <fieldset>
              <legend>Work Experience</legend>
              <input type='text' value={expInfo.company} onChange={(e) => setExpInfo({...expInfo, company : e.target.value})}/>
              <input type='text' value={expInfo.position} onChange={e => setExpInfo({...expInfo, position : e.target.value})}/>
              <input type='text' value={expInfo.start} onChange={e => setExpInfo({...expInfo, start : e.target.value})}/>
              <input type='text' value={expInfo.end} onChange={e => setExpInfo({...expInfo, end : e.target.value})}/>
              <textarea type='text' value={expInfo.expDescription} onChange={e => setExpInfo({...expInfo, expDescription : e.target.value})}/>
            </fieldset>
        </div>
        <div>
            <Display data={info} />
            <ExpDisplay data={expInfo} />
        </div>
      </div>
  )
}

export default General;  
