import React, { useEffect } from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import { asyncLoginUser } from "../../Redux/reducers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector(state => state)
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
    console.log(state)
  }
  return (
    <form onSubmit={handleLogin}>
      <div>
        <Label text="email" />
        <Input
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Type your email"
          value="guerrilasdasla00@gamail.com"
        />
      </div>
      <div>
        <Label text="password" />
        <Input
          type="password"
          name="password"
          // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
          title="Type your password"
          value='przykladowehaslo'
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
