// const saveToLocalStorage = (key, value) => {
//   try {
//     const serializedValue = JSON.stringify(value);
//     localStorage.setItem(key, serializedValue);
//   } catch (error) {
//     console.error("Error: ", error.message);
//   }
// };

// const loadFromLocalStorage = (key) => {
//   try {
//     const serializedValue = localStorage.getItem(key);
//     return serializedValue === null ? undefined : JSON.parse(serializedValue);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// };

// if (loadFromLocalStorage("CONTACTS") === undefined) {
//   saveToLocalStorage("CONTACTS", []);
// }

// const initialContacts = loadFromLocalStorage("CONTACTS");

// export { saveToLocalStorage, loadFromLocalStorage, initialContacts };
