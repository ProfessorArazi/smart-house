import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddRoom.css";

export const AddRoom = (props) => {
  const navigate = useNavigate();

  const [type, setType] = useState("pick");

  const nameRef = useRef();
  const colorRef = useRef();

  const create = () => {
    if (
      type === "pick" ||
      nameRef.current.value.length < 1 ||
      nameRef.current.value.length > 5
    ) {
      alert("ERROR");
    } else {
      props.updateRooms(type, nameRef.current.value, colorRef.current.value);
    }
    navigate("/");
  };

  return (
    <div>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        name="rooms"
        id="rooms"
        placeholder="בחר חדר חדש"
      >
        <option value="pick" disabled>
          בחר חדר חדש
        </option>
        <option value="חדר שינה">חדר שינה</option>
        <option value="חדר אמבטיה/שירותים">חדר אמבטיה/שירותים</option>
        <option value="מטבח">מטבח</option>
      </select>
      <input ref={nameRef} type="text" placeholder="שם החדר" />
      <input ref={colorRef} type="text" placeholder="צבע החדר" />
      <button className="create-room__btn" onClick={create}>
        צור
      </button>
    </div>
  );
};
