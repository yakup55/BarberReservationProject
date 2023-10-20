import { hour, hours } from "../initials/hourInitials";
import {
  GET_BY_ID,
  ADD,
  DELETE,
  UPDATE,
  GET_LIST_HOUR,
} from "../actions/hourActions";

const initialvales = {
  hour,
  hours,
};
export default function hourReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case GET_LIST_HOUR:
      return {
        ...state,
        hours: payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        hour: payload,
      };
    case ADD:
      return {
        ...state,
        hours: [...state.hours, payload],
      };
    case UPDATE:
      return {
        ...state,
        hours: [...state.hours.filter((x) => x.id !== payload.id), payload],
      };
    case DELETE:
      return {
        ...state,
        hours: [...state.hours.filter((x) => x.id !== payload)],
      };
    default:
      return {
        ...state,
      };
  }
}
