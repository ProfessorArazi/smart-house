import React, { useState } from "react";
import { Product } from "./Product";
import "./RoomDetails.css";
import { useNavigate } from "react-router-dom";

export const RoomDetails = (props) => {
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [product, setProduct] = useState("pick");

  const addProduct = () => {
    if (product === "pick") {
      alert("ERROR");
    } else if (
      product === "מערכת סטריאו" &&
      props.products.find((product) => product.name === "מערכת סטריאו")
    ) {
      alert("ERROR");
    } else if (props.type !== "חדר אמבטיה/שירותים" && product === "דוד") {
      alert("ERROR");
    } else {
      const products = props.products;
      products.push({ name: product, on: false, id: products.length });
      const temp = props.rooms;
      const index = temp.findIndex((room) => room.id === props.id);
      temp.splice(index, 1, {
        type: props.type,
        name: props.name,
        color: props.color,
        id: props.id,
        products,
      });

      props.setRooms(temp);
    }
    setShowForm(false);
  };

  return (
    <div>
      <div className="details-flex">
        <button className="home-page__btn" onClick={() => navigate("/")}>
          דף הבית
        </button>
        <div>
          {props.products.map((product, i) => (
            <Product
              key={i}
              name={product.name}
              on={product.on}
              id={product.id}
            />
          ))}
        </div>
        <div>
          <p>שם החדר : {props.name}</p>
          <p>סוג החדר : {props.type}</p>
          {props.products.length < 5 && (
            <button onClick={() => setShowForm(!showForm)}>הוסף מוצר</button>
          )}
        </div>
      </div>

      {showForm && (
        <>
          <select
            className="products-select"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            name="products"
            id="products"
            placeholder="בחר מוצר"
          >
            <option value="pick" disabled>
              בחר מוצר
            </option>
            <option value="מזגן">מזגן</option>
            <option value="דוד">דוד</option>
            <option value="מערכת סטריאו">מערכת סטריאו</option>
            <option value="מנורה">מנורה</option>
          </select>
          <button className="add-product__btn" onClick={addProduct}>
            הוסף
          </button>
        </>
      )}
    </div>
  );
};
