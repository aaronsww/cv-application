import React from 'react'

function EduDisplay(props) {
  return (
    <div>
              <h2>Course: {props.data.course}</h2>
              <p>University: {props.data.uni}</p>
              <p>start: {props.data.startDate}</p>
              <p>end: {props.data.endDate}</p>
              <div>{ JSON.stringify(props)}</div>
    </div>
  )
}

export default EduDisplay