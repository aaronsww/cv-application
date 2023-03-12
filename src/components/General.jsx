import React, { useState, useEffect } from "react";
import "../App.css";
import Display from "./Display";
import useGeneralStore from "../store/useGeneralStore";

function General() {
  const general = useGeneralStore((state) => state.general);
  const setGeneral = useGeneralStore((state) => state.setGeneral);

  const aboutText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  const [name, setName] = useState("Jeevan Aaron");
  const [post, setPost] = useState("Full Stack Developer");
  const [phoneNo, setPhoneNo] = useState(9945226832);
  const [email, setEmail] = useState("doeman@gmail.com");
  const [description, setDescription] = useState(aboutText);

  useEffect(() => {
    setGeneral({
      ...general,
      name,
      post,
      phoneNo,
      email,
      description,
    });
  }, [name, post, phoneNo, email, description]);

  // const [info, setInfo] = useState({
  // name: "Jeevan Aaron",
  // post: "Full Stack Developer",
  // phoneNo: "01234567890",
  // email: "doeman@gmail.com",
  // description: aboutText,
  // });

  // function handleInfo(e, infor) {
  //   console.log(infor);
  //   setInfo({ ...info, name: e.target.value });
  // }
  return (
    <div className="mainContainer">
      <div className="informationContainer topBox">
        <input
          type="text"
          // value={info.name}
          value={name}
          // onChange={(e) => handleInfo(e, info.name)}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          // value={info.post}
          value={post}
          // onChange={(e) => setInfo({ ...info, post: e.target.value })}
          onChange={(e) => setPost(e.target.value)}
        />
        <input
          type="number"
          // value={info.phoneNo}
          value={phoneNo}
          // onChange={(e) => setInfo({ ...info, phoneNo: e.target.value })}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <input
          type="email"
          // value={info.email}
          value={email}
          // onChange={(e) => setInfo({ ...info, email: e.target.value })}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          type="text"
          // value={info.description}
          value={description}
          // onChange={(e) => setGeneral({ ...info, description: e.target.value })}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      {/* <Display data={info} /> */}
    </div>
  );
}

export default General;
