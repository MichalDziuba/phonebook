import { React, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { Phonebook } from "./Components/Phonebook/Phonebook";
import { Navigation } from "./Components/Navigation/Navigation.jsx";
import { LoginForm } from "./Components/Login/Login";
import { RegisterForm } from "./Components/Register/Register";
import { PrivateRoute } from "./Routes/PrivateRoute/PrivateRoute";
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback="We are working for you! Please wait a second">
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route element={<PrivateRoute/>}>
            <Route path="contacts" element={<Phonebook />} />
          </Route>
          <Route path="*" element=<div>THERES NOTHING HERE</div>/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode >
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
