import React from "react";
import { Consumer } from "../contextApi";
import "./Product.css";

export const Product = (props) => {
  return (
    <Consumer>
      {(store) => (
        <div
          className="product"
          style={{ background: props.on ? "green" : "red" }}
          onClick={() => {
            const products = store.pickedRoom.products;
            const index = products.findIndex(
              (product) => product.id === props.id
            );
            products[index].on = !products[index].on;
            store.setPickedRoom({
              ...store.pickedRoom,
              products,
            });
          }}
        >
          {props.name}
        </div>
      )}
    </Consumer>
  );
};
