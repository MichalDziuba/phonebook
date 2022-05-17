import axios from "axios";
export const baseURL = "https://connections-api.herokuapp.com";
const api = axios.create({ baseURL });
export const userApi = {
   userSignup:(payload) => {
  return api.post("/users/signup", payload);
  },
  userLogin: (payload) => {
    return api.post("/users/login",payload)
  },
  userLogout:(token)=> {
    api.defaults.headers.Authorization = `Bearer ${token}`;
    return api.post("/users/logout");
  }
}
export const contactsApi = {
  addContactToApi: (token, contact) => {
    api.defaults.headers.Authorization = `Bearer ${token}`;
    return api.post("/contacts", contact);
  },
  fetchContactsFromApi: (token) => {
    api.defaults.headers.Authorization = `Bearer ${token}`;
    return api.get("/contacts");
  },
  deleteContactFromApi: (token, id) => {
    api.defaults.headers.Authorization = `Bearer ${token}`;
    return api.delete(`/contacts/${id}`);
  },
};
