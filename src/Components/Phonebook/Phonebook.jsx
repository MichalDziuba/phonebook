import React from "react";
import { Provider, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import { store } from "../../Redux/store";
import { Outlet } from "react-router-dom";
import { UserMenu } from "../UserMenu/UserMenu";
import { userSignup } from "../../Redux/connections-api";
import { userLogin } from "../../Redux/connections-api";
// console.log(
//   userLogin({
//     'email': "acrdasdasdadsdadaaadadwadssasdasdoss@mail.com",
//     'password': "asdasdasddasdasdaasdasd",
//   })
// );
// console.log(
//   userSignup({
//     'name': "Adriadsadasdasdn Cross",
//     'email': "acrdasdasdadsdadaaadadwadssasdasdoss@mail.com",
//     'password': "asdasdasddasdasdaasdasd"
//   })
// );
export const Phonebook = () => {
  const stateStatus = useSelector((state) => state.phonebook.status);
  return (
    <div>
      <UserMenu/>
      <h1>Phonebook</h1>
      <ContactForm />
      {stateStatus === "loading" ? (
        <div className="loading">
          We are working for you. Please wait a second!{" "}
        </div>
      ) : (
        <ContactList />
      )}
      <Outlet />
    </div>
  );
};
