import React from 'react'

function Display(props) {
  return (
    <div>
              <h1>company: {props.data.company}</h1>
              <p>position: {props.data.position}</p>
              <p>start: {props.data.start}</p>
              <p>end: {props.data.end}</p>
              <p>description: {props.data.expDescription}</p>
              <div>{ JSON.stringify(props)}</div>
         
    </div>
  )
}

export default Display