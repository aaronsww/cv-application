import React from 'react'

function Display(props) {
  return (
    <div>
         
              <h1>name: {props.data.name}</h1>
              <p>post: {props.data.post}</p>
              <p>number: {props.data.phoneNo}</p>
              <p>email: {props.data.email}</p>
              <p>description: {props.data.description}</p>
              <div>{ JSON.stringify(props)}</div>
         
    </div>
  )
}

export default Display