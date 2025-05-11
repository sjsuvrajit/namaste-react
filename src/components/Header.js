import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header Rendered");

  useEffect(() => {
    console.log("useEffect Called");
  }, [btnName]);

    return (
      <div className="header">
        <div className="logo">
          <img
            alt="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to={"/"}>Home</Link> </li>
            <li><Link to={"/about"}>About</Link> </li>
            <li><Link to={"/contact"}>Contact Us</Link> </li>
            <li>Cart</li>
            <button className="login" onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
};

export default Header;