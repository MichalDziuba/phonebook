import React, { useEffect } from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import { asyncLoginUser } from "../../Redux/reducers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './Login.module.css'
export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token=useSelector(state=>state.phonebook.userData.token)
  useEffect(() => {
    if (token) {
      return navigate("/contacts")
    }
  },[token])
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(asyncLoginUser({
      "email": email,
      "password":password
    }))
  }
  return (
    <div className={styles.login__wrapper}>
      <form onSubmit={handleLogin}>
        <div>
          <Label text="Email:" />
          <Input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <Label text="Password:" />
          <Input
            type="password"
            name="password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className={styles.button__login}>
          Login
        </button>
      </form>
    </div>
  );
};
