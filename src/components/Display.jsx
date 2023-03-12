import React from "react";
import useGeneralStore from "../store/useGeneralStore";

function Display() {
  // props is the prop name

  const general = useGeneralStore((state) => state.general);

  return (
    <div>
      <div className="topBar">
        <div className="user">
          {/* <h1>{props.data.name}</h1>
              <p>{props.data.post}</p> */}
          <h1 className="name">{general.name}</h1>
          <p>{general.post}</p>
        </div>
        <div className="userDetails">
          <h4 className="contact">CONTACT</h4>
          {/* <div>{props.data.phoneNo}</div>
              <div>{props.data.email}</div> */}
          <div>{general.phoneNo}</div>
          <div>{general.email}</div>
        </div>
      </div>
      {/* <p className="desc">{props.data.description}</p> */}
      <p>{general.description}</p>
      {/* <div>{ JSON.stringify(props)}</div> */}
    </div>
  );
}

export default Display;
