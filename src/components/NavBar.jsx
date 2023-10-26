import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {

  const userName = useSelector(state => state.user.name);

  return (
    <div>
      <span>Rick&Morty Episodes | Actual User: {userName} </span>
      <button>
        <NavLink
        // { isActive: true||false }
          to="/home"
          style={({ isActive }) => isActive ? { color: "coral"} : { color: "grey" } }
        >Home</NavLink>
      </button>
      <button>
        <NavLink
          to="/favorites"
          style={({ isActive }) => isActive ? { color: "coral"} : { color: "grey" } }
        >Favorites</NavLink>
      </button>
    </div>
  );
}