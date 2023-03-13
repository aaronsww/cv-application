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
          <div className="call">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1e3f1f"
                d="M12 12.95v-10h9v7h-6ZM19.95 21q-3.225 0-6.287-1.425q-3.063-1.425-5.425-3.8q-2.363-2.375-3.8-5.438Q3 7.275 3 4.05v-.525Q3 3.25 3.05 3H8.9l.925 5.025l-2.85 2.875q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.9-2.9l5 1v5.85q-.25.025-.525.038Q20.2 21 19.95 21Z"
              />
            </svg>
            <span>{general.phoneNo}</span>
          </div>
          <div className="email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1e3f1f"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"
              />
            </svg>
            <span>{general.email}</span>
          </div>
        </div>
      </div>
      {/* <p className="desc">{props.data.description}</p> */}
      <p>{general.description}</p>
      {/* <div>{ JSON.stringify(props)}</div> */}
    </div>
  );
}

export default Display;
