import React from "react";
import "./App.css";
import {  Outlet } from "react-router-dom";
import { Phonebook } from "./Components/Phonebook/Phonebook";
import { Navigation } from "./Components/Navigation/Navigation";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
      <Phonebook />
    </div>
  );
}
