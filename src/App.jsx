import "./App.css";
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { AddRoom } from "./Components/AddRoom";
import { Provider } from "./contextApi";
import { RoomDetails } from "./Components/RoomDetails";

function App() {
  const [rooms, setRooms] = useState([]);
  const [pickedRoom, setPickedRoom] = useState({});

  const updateRooms = (type, name, color) => {
    return setRooms([
      ...rooms,
      { type, name, color, id: rooms.length, products: [] },
    ]);
  };

  return (
    <div className="App">
      <h1>Smart house</h1>

      <Provider value={{ setPickedRoom, pickedRoom }}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home rooms={rooms} />} />
            <Route
              path="/addroom"
              element={<AddRoom updateRooms={updateRooms} />}
            />
            <Route
              path={`/room${pickedRoom.name}`}
              element={
                <RoomDetails
                  name={pickedRoom.name}
                  type={pickedRoom.type}
                  products={pickedRoom.products}
                  color={pickedRoom.color}
                  rooms={rooms}
                  setRooms={setRooms}
                  id={pickedRoom.id}
                />
              }
            />
          </Routes>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
