import React, { useState } from "react";
import { Button } from "antd";
import "antd/dist/reset.css";
import "./zomato.css";
import { Link } from "react-router-dom";



function Page() {
  
  const [state, toggleState] = useState(0);

  const toggleLink = (index) => {
    toggleState(index);
  };

  return (
    <>
      <div className="main_container">
        <div className="main_header">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt=""
            srcset=""
            className="logo"
          />
          <input
            className="search_bar"
            type="search"
            name=""
            id=""
            placeholder="🔎 Search for restaurant"
          />
          <Button type="text">Log in</Button>
          <Button type="text">Sign up</Button>
        </div>
        <nav className="navbar">
          <Link
            to="/Delivery"
            className={state === 1 ? "link-active" : "links"}
            onClick={() => toggleLink(1)}
          >
            <h2>
              <div className="adjustment">
                <div className={state === 1 ? "background-active" : "background"}>
                  <img
                    className="img"
                    src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                    alt=""
      
                  />
                </div>
              </div>{" "}
              Delivery
            </h2>
          </Link>

          <Link
            to="/diningout"
            className={state === 2 ? "link-active" : "links"}
            onClick={() => toggleLink(2)}
          >
            <h2>
              <div className={state === 2 ? "background-active" : "background"}>
                <img
                  className="img"
                  src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                  alt=""
                  
                />
              </div>{" "}
              Dining Out
            </h2>
          </Link>

          <Link to="/nightlight"
            className={state === 3 ? "link-active" : "links"}
            onClick={() => toggleLink(3)}>
          <h2>
            <div className={state === 3 ? "background-active" : "background"}>
              <img
                className="img"
                src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png?output-format=webp"
                alt=""
                
              />
            </div>{" "}
            Night Light
          </h2>
          </Link>
        </nav>
      </div>
      <div className="line"></div>
    </>
  );
}

export default Page;
