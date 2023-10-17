import { user, users } from "../initials/userInitials";
import {
  GET_LIST,
  GET_BY_ID,
  ADD,
  DELETE,
  UPDATE,
} from "../actions/userActions";

const initialvales = {
  user,
  users,
};
export default function userReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case GET_LIST:
      return {
        ...state,
        users: payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        user: payload,
      };
    case ADD:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case UPDATE:
      return {
        ...state,
        users: [...state.users.filter((x) => x.id !== payload.id), payload],
      };
    case DELETE:
      return {
        ...state,
        users: [...state.users.filter((x) => x.id !== payload)],
      };
    default:
      return {
        ...state,
      };
  }
}
