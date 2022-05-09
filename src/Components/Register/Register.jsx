import {React,useEffect} from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import { useDispatch, useSelector } from "react-redux";
import { asyncAddUser } from "../../Redux/reducers";
import {  useNavigate } from "react-router-dom";
import styles from './Register.module.css'
import Notiflix from "notiflix";
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
   const token = useSelector((state) => state.phonebook.userData.token);
   useEffect(() => {
     if (token) {
       return navigate("/contacts");
     }
   }, [token,navigate]);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const password2 = form.elements.password2.value
    if (password !== password2) {
      Notiflix.Notify.warning("Passwords are not the same. Try again.");
    }
    else {
      dispatch(asyncAddUser({
        "name": name,
        "email": email,
        "password": password
      }))
    }
}

  return (
    <form onSubmit={handleRegister}>
      <div>
        <Label text="Name:" />
        <Input
          type="name"
          name="name"
          placeholder="Enter your name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
      <div>
        <Label text="Email:" />
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
      <div>
        <Label text="Password:" />
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
          title="Password need At least 1 Uppercase, 1 lowercase, 1 number, 1 symbol, min 8 chars max 16 chars"
        />
      </div>
      <div>
        <Label text="Confirm password:" />
        <Input
          type="password"
          name="password2"
          placeholder="Confirm password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
          title="Password need At least 1 Uppercase, 1 lowercase, 1 number, 1 symbol, min 8 chars max 16 chars"
        />
      </div>
      <button type="submit" className={styles.button__register}>Register</button>
    </form>
  );
};
