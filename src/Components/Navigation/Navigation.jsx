import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <h2 className={styles.navigation__tittle}>Welcome in your Phonebook!</h2>
      <div className={styles.navigation__wrapper}>
        <NavLink
          className="Navigation_Link"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#fff",
                  background: "#7600dc",
                }
              : {
                  color: "#545e6f",
                  background: "#f0f0f0",
                }
          }
          to={`/login`}
        >
          Login
        </NavLink>

        <NavLink
          className="Navigation_Link"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#fff",
                  background: "#7600dc",
                }
              : { color: "#545e6f", background: "#f0f0f0" }
          }
          to={`/register`}
        >
          Register
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
