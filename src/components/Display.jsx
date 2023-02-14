import React from 'react'

function Display(props) {
  return (
    <div>
          <div  className="topBar">
            <div className="user">
              <h1>{props.data.name}</h1>
              <p>{props.data.post}</p>
            </div>  
            <div className='userDetails'>
              <h3>CONTACT</h3>
              <div>{props.data.phoneNo}</div>
              <div>{props.data.email}</div>
            </div>
          </div>
          <p className="desc">{props.data.description}</p>
          {/* <div>{ JSON.stringify(props)}</div> */}
    </div>
  )
}

export default Display