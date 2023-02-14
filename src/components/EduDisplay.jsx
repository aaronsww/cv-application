import React from 'react'

function EduDisplay(props) {
  return (
       <div className="wholeSection">
       <div className="wrapper">
         <div className="title"> {props.data.course}</div>
         <section>
           <div className="location"> {props.data.uni}</div>
           <div className="doj">  {props.data.startDate}</div>
           <div>-</div>
           <div className="doe">{props.data.endDate}</div>
         </section>
       </div>
        </div>
  )
}

export default EduDisplay