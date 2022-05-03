import axios from "axios";
export const baseURL = "https://connections-api.herokuapp.com";
const api = axios.create({ baseURL });

export const userSignup = (payload) => {
  return api.post("/users/signup", payload);
};
export const userLogin = (payload) => {
  return api.post("/users/login", payload);
};
export const userLogout = (token) => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
  return api.post("/users/logout");
};
export const addContactToApi = (token, contact) => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
 return api.post("/contacts", contact);
};
export const fetchContactsFromApi = (token) => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
  return axios.get("/contacts");
};

