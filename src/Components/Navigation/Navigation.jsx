import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  const token = useSelector((state) => state.phonebook.userData.token);
  return token ? (
    <Navigate to="/contacts" replace />
  ) : (
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
                  boxShadow:
                    "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                }
              : {
                  color: "#545e6f",
                  background: "#f0f0f0",

                  boxShadow:
                    "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
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
                  boxShadow:
                    "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                }
              : {
                  color: "#545e6f",
                  background: "#f0f0f0",
                  boxShadow:
                    "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                }
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
