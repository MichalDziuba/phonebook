import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  userApi,
  contactsApi

} from "./connections-api";
// import { deleteContactFromApi } from "./mockapi";
import Notiflix from "notiflix";
const initialState = {
  items: [],
  filter: "",
  isLoading: false,
  status: "",
  userData: {},
};
export const asyncFetchContacts = createAsyncThunk(
  "phonebook/fetchContacts",
  async (token) => {
    const response = await contactsApi.fetchContactsFromApi(token);
    return response.data;
  }
);
export const asyncAddContact = createAsyncThunk(
  "phonebook/addContact",
  async (contact) => {
    const response = await contactsApi.addContactToApi(
      contact.token,
      contact.contactInfo
    );
    return response.data;
  }
);
export const asyncDeleteContact = createAsyncThunk(
  "phonebook/deleteContact",
  async (contact) => {
    await contactsApi.deleteContactFromApi(
      contact.token,
      contact.contactInfo.id
    );
    const response = await contactsApi.fetchContactsFromApi(contact.token);
    return response.data;
  }
);
export const asyncAddUser = createAsyncThunk(
  "phonebook/addUser",
  async (user) => {
    const response = await userApi.userSignup(user);
    return response.data;
  }
);
export const asyncLoginUser = createAsyncThunk(
  "phonebook/loginUser",
  async (user) => {
    const response = await userApi.userLogin(user);
    return response.data;
  }
);
export const asyncLogoutUser = createAsyncThunk(
  "phonebook/logout",
  async (token) => {
    const response = await userApi.userLogout(token);
    return response.data;
  }
);
export const contactListSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    filterContacts: (state, action) => ({ ...state, filter: action.payload }),
  },
  extraReducers: (builder) => {
    builder
      //POBIERANIE KONTAKTÓW
      .addCase(asyncFetchContacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncFetchContacts.fulfilled, (state, action) => {
       
        state.items = state.items.concat(action.payload);
        state.status = "succeeded";
        
      })
      //DODAWANIE NOWEGO KONTATKU
      .addCase(asyncAddContact.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncAddContact.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      //USUWANIE KONTAKTU
      .addCase(asyncDeleteContact.fulfilled, (state, action) => {
        state.items = action.payload;
      
      })
      //REJESTRACJA
      .addCase(asyncAddUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncAddUser.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.status = "succeeded";

      })
      .addCase(asyncAddUser.rejected, (action) => {
        Notiflix.Notify.info('Something went wrong. Check all fields and try again!')
      })
      //LOGOWANIE
      .addCase(asyncLoginUser.pending, (state) => {
        state.status = "loading";
      })

      .addCase(asyncLoginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
        state.status = "idle";

      })
      .addCase(asyncLoginUser.rejected, (action)=> {
  Notiflix.Notify.info("Email or password incorrect!");
      })
      //WYLOGOWYWANIE
      .addCase(asyncLogoutUser.fulfilled, (state) => {
        state.userData = {};
        state.items = [];

      })
      .addCase(asyncLogoutUser.rejected, (state) => {
        state.userData = {};
        state.items = [];

      });
  },
});

export const { addContact, deleteContact, filterContacts, addUser, loginUser } =
  contactListSlice.actions;

export default contactListSlice.reducer;
