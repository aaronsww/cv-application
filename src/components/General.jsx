import React, {useState} from 'react';
import '../App.css'
import Display from './Display';
import ExpDisplay from './ExpDisplay';
import EduDisplay from './EduDisplay';

function General() {

  const[info, setInfo] = useState({name: '', post: '',phoneNo: '',email: '', description: ''})
  const[expInfo, setExpInfo] = useState({company: '', position: '',start: '',end: '', expDescription: ''})
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
            <fieldset>
              <legend>Work Experience</legend>
              <input type='text' value={expInfo.company} onChange={(e) => setExpInfo({...expInfo, company : e.target.value})}/>
              <input type='text' value={expInfo.position} onChange={e => setExpInfo({...expInfo, position : e.target.value})}/>
              <input type='text' value={expInfo.start} onChange={e => setExpInfo({...expInfo, start : e.target.value})}/>
              <input type='text' value={expInfo.end} onChange={e => setExpInfo({...expInfo, end : e.target.value})}/>
              <textarea type='text' value={expInfo.expDescription} onChange={e => setExpInfo({...expInfo, expDescription : e.target.value})}/>
            </fieldset>
            <fieldset>
              <legend>Education</legend>
              <input type='text' value={eduInfo.course} onChange={(e) => setExpInfo({...eduInfo, course : e.target.value})}/>
              <input type='text' value={eduInfo.uni} onChange={e => setExpInfo({...eduInfo, uni : e.target.value})}/>
              <input type='text' value={eduInfo.startDate} onChange={e => setExpInfo({...eduInfo, startDate : e.target.value})}/>
              <input type='text' value={eduInfo.endDate} onChange={e => setExpInfo({...eduInfo, endDate : e.target.value})}/>
            </fieldset>
        </div>
        <div>
            <Display data={info} />
            <ExpDisplay data={expInfo} />
            <EduDisplay data={eduInfo} />
        </div>
      </div>
  )
}

export default General;  
