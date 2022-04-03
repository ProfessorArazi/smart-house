import React from "react";
import { useNavigate } from "react-router-dom";
import { Room } from "./Room";
import "./Home.css";

export const Home = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="rooms">
        {props.rooms.map((room, i) => (
          <Room
            key={i}
            id={room.id}
            name={room.name}
            color={room.color}
            type={room.type}
            products={room.products}
          />
        ))}
      </div>
      <button className="add-room" onClick={() => navigate("/addroom")}>
        +
      </button>
    </div>
  );
};
