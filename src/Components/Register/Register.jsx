import {React,useEffect} from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import { useDispatch, useSelector } from "react-redux";
import { asyncAddUser } from "../../Redux/reducers";
import { Navigate, useNavigate } from "react-router-dom";
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.phonebook)
  const navigate = useNavigate()
   const token = useSelector((state) => state.phonebook.userData.token);
   useEffect(() => {
     if (token) {
       return navigate("/contacts");
     }
   }, [token]);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(asyncAddUser({
      "name": name,
      "email": email,
      "password":password
    }))
    console.log(state);
  
}

  return (
    <form onSubmit={handleRegister}>
      <div>
        <Label text="name" />
        <Input
          type="name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
      <div>
        <Label text="email" />
        <Input
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
      <div>
        <Label text="password" />
        <Input
          type="password"
          name="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
          title="Password need At least 1 Uppercase, 1 lowercase, 1 number, 1 symbol, min 8 chars max 16 chars"
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
