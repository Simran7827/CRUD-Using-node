import { Link, Outlet } from "react-router-dom";
import React from "react";

function Linkk() {
  const style={
    backgroundColor:"black",
    color:"white",
    textDecoration:"none"
    
  }
  return (
    <>
      <ul className="nav-ul" style={style}>
        <li>
          <Link to="/" style={style}>HOME</Link>
        </li>

        <li>
          <Link to="/create" style={style}>CREATE</Link>
        </li>

        <li>
          <Link to="/update" style={style}>UPDATE</Link>
        </li>

        <li>
          {" "}
          <Link to="/delete" style={style}>DELETE</Link>
        </li>

        <li>
          {" "}
          <Link to="/contact" style={style}>CONTACT</Link>
        </li>

        <li>
          {" "}
          <Link to="/about" style={style}>ABOUT</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Linkk;
