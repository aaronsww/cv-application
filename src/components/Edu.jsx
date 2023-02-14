import React, {useState} from 'react'
import EduDisplay from './EduDisplay';

function Exp() {
    const[eduInfo, setEduInfo] = useState({course: '', uni: '',startDate: '',endDate: '' })

  return (
    <div  className='mainContainer'>
        <fieldset>
          <legend>Education</legend>
          <input type='text' value={eduInfo.course} onChange={(e) => setEduInfo({...eduInfo, course : e.target.value})}/>
          <input type='text' value={eduInfo.uni} onChange={e => setEduInfo({...eduInfo, uni : e.target.value})}/>
          <input type='text' value={eduInfo.startDate} onChange={e => setEduInfo({...eduInfo, startDate : e.target.value})}/>
          <input type='text' value={eduInfo.endDate} onChange={e => setEduInfo({...eduInfo, endDate : e.target.value})}/>
        </fieldset>
        <EduDisplay data={eduInfo} />
    </div>
  )
}

export default Exp