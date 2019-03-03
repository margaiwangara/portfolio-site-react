import { DELETE_USER, SEND_MESSAGE } from "./index";
import axios from 'axios';

export const reducer = (state, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case SEND_MESSAGE:
      
      axios
      .post("/api/contact", action.payload)
      .then(response => console.log(response))
      .catch(error => console.log(error));
      return {
        ...state,
        contact: [...state.contact, action.payload]
      };
    case "ADD_TODO":
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
};
