import React, {useState} from 'react';
import '../App.css'
import Display from './Display';
import Exp from './Exp';

import EduDisplay from './EduDisplay';

function General() {

  const[info, setInfo] = useState({name: '', post: '',phoneNo: '',email: '', description: ''})
  
  const[eduInfo, setEduInfo] = useState({course: '', uni: '',startDate: '',endDate: '' })
  
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
            <Exp/>
            <fieldset>
              <legend>Education</legend>
              <input type='text' value={eduInfo.course} onChange={(e) => setEduInfo({...eduInfo, course : e.target.value})}/>
              <input type='text' value={eduInfo.uni} onChange={e => setEduInfo({...eduInfo, uni : e.target.value})}/>
              <input type='text' value={eduInfo.startDate} onChange={e => setEduInfo({...eduInfo, startDate : e.target.value})}/>
              <input type='text' value={eduInfo.endDate} onChange={e => setEduInfo({...eduInfo, endDate : e.target.value})}/>
            </fieldset>
        </div>
        <div>
            <Display data={info} />
            <EduDisplay data={eduInfo} />
        </div>
      </div>
  )
}

export default General;  
