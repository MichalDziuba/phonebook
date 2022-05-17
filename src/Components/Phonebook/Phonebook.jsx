import React from "react";
import { useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import { Outlet } from "react-router-dom";
import { UserMenu } from "../UserMenu/UserMenu";
import styles from "./Phonebook.module.css";
import { Loader } from "../Loading/Loading";
export const Phonebook = () => {
  const stateStatus = useSelector((state) => state.phonebook.status);
  return (
    <div className={styles.phonebook__wrapper}>
      {" "}
      <UserMenu />
      <div className={styles.phonebook}>
        <h1 className={styles.phonebook__tittle}>Phonebook</h1>
        <ContactForm />
        {stateStatus === "loading" ? <Loader /> : <ContactList />}
        <Outlet />
      </div>
    </div>
  );
};
