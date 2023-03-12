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
  return (
    <div className="sectionContianer">
      <div className="informationContainer topBox">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <input
          type="number"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textBox"
        />
      </div>
    </div>
  );
}

export default General;
