import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export const Navigation = () => {
    return (
      <div className="navigation">
        <span>Welcome!</span>
        <NavLink
          className="Navigation_Link"
          style={({ isActive }) => {
            return {
              display: "block",
              morgin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to={`/login`}
        >
          Login
        </NavLink>
        <NavLink
          className="Navigation_Link"
          style={({ isActive }) => {
            return {
              display: "block",
              morgin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to={`/register`}
        >
          Register
        </NavLink>
        <Outlet/>
      </div>
    );
}