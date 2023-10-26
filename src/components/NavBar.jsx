import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <span>Rick&Morty Episodes </span>
      <button>
        <NavLink
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