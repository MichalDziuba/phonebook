import axios from "axios";
const baseURL = "https://62486dce20197bb4626917a1.mockapi.io/";

const fetchContactsFromApi = () => {
  return axios.get("/contacts");
};
const postContactsToApi = (contact) => {
  return axios.post("/contacts", contact);
};
const deleteContactFromApi = (id) => {
  return axios.delete(`/contacts/${id}`);
};
export { fetchContactsFromApi, postContactsToApi, deleteContactFromApi };
