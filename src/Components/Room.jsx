import React from "react";
import { Consumer } from "../contextApi";
import { useNavigate } from "react-router-dom";

import "./Room.css";

export const Room = (props) => {
  const navigate = useNavigate();

  return (
    <Consumer>
      {(store) => (
        <div
          onClick={() => {
            store.setPickedRoom({
              id: props.id,
              color: props.color,
              type: props.type,
              name: props.name,
              products: props.products,
            });
            navigate(`/room${props.name}`);
          }}
          className="room"
          style={{ background: props.color }}
        >
          <p>{props.name}</p>
        </div>
      )}
    </Consumer>
  );
};
