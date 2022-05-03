import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
  userLogin,
  userLogout,
  userSignup,
  addContactToApi,
} from "./connections-api";
import {
  fetchContactsFromApi,
  postContactsToApi,
  deleteContactFromApi,
} from "./mockapi";

const initialState = {
  items: [],
  filter: "",
  isLoading: false,
  status: "idle",
  userData: {},
};
export const asyncFetchContacts = createAsyncThunk(
  "phonebook/fetchContacts",
  async () => {
    const response = await fetchContactsFromApi();
    return response.data;
  }
);
export const asyncAddContact = createAsyncThunk(
  "phonebook/addContact",
  async (token, contact) => {
    const response = await addContactToApi(token, contact);
    return response.data;
  }
);
export const asyncDeleteContact = createAsyncThunk(
  "phonebook/deleteContact",
  async (id) => {
    await deleteContactFromApi(id);
    const response = await fetchContactsFromApi();
    return response.data;
  }
);
export const asyncAddUser = createAsyncThunk(
  "phonebook/addUser",
  async (user) => {
    const response = await userSignup(user);
    return response.data;
  }
);
export const asyncLoginUser = createAsyncThunk(
  "phonebook/loginUser",
  async (user) => {
    const response = await userLogin(user);
    return response.data;
  }
);
export const asyncLogoutUser = createAsyncThunk(
  "phonebook/logout",
  async (token) => {
    const response = await userLogout(token);
    return response.data;
  }
);
export const contactListSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    // addContact: (state, action) => ({
    //   ...state,
    //   items: [...state.items, action.payload],
    // }),
    // deleteContact: (state, action) => ({
    //   ...state,
    //   items: [...state.items.filter(({ id }) => id !== action.payload)],
    // }),

    filterContacts: (state, action) => ({ ...state, filter: action.payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncFetchContacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncFetchContacts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.concat(action.payload);
      })
      .addCase(asyncAddContact.pending, state => {
        state.status ='loading'
      })
      .addCase(asyncAddContact.fulfilled, (state, action) => {
        state.status ='succeeded'
        state.items.push(action.payload);
        
      })
      .addCase(asyncDeleteContact.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(asyncAddUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncAddUser.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.status = "succeeded";
      
      })
      .addCase(asyncLoginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncLoginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
       
      })
      .addCase(asyncLogoutUser.fulfilled, (state) => {
        state.userData = {};
      })
      .addCase(asyncLogoutUser.rejected, (state) => {
        state.userData = {};
      });
  },
});

export const { addContact, deleteContact, filterContacts, addUser, loginUser } =
  contactListSlice.actions;

export default contactListSlice.reducer;
