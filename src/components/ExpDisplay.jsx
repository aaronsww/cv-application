import React from 'react'

function ExpDisplay(props) {
  return (
    <div>
              <h2>company: {props.data.company}</h2>
              <p>position: {props.data.position}</p>
              <p>start: {props.data.start}</p>
              <p>end: {props.data.end}</p>
              <p>description: {props.data.expDescription}</p>
              <div>{ JSON.stringify(props)}</div>
         
    </div>
  )
}

export default ExpDisplay