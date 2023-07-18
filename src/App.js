import React from "react";
import { Route, Routes } from "react-router-dom";
import Delivery from "./Zomato/Delivery";
import Diningout from "./Zomato/diningout";
import Nightlight from "./Zomato/nightlight";
import NotFound from "./Zomato/NotFound";
import Page from "./Zomato/Page";
import "./App.css";


function App() {
  return (
    <div>
      <Page />
        <Routes>
        <Route path="*" element={<NotFound />} ></Route>
        <Route path="/delivery" element={< Delivery />} ></Route>
        <Route path="/diningout" element={< Diningout />} ></Route>
        <Route path="/nightlight" element={< Nightlight />} ></Route>
        </Routes>
      
    </div>
  );
}

export default App;
