import { barber, barbers } from "../initials/barberInitials";
import {
  GET_LIST,
  GET_BY_ID,
  ADD,
  DELETE,
  UPDATE,
} from "../actions/barberActions";

const initialvales = {
  barber,
  barbers,
};
export default function barberReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case GET_LIST:
      return {
        ...state,
        barbers: payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        barber: payload,
      };
    case ADD:
      return {
        ...state,
        barbers: [...state.barbers, payload],
      };
    case UPDATE:
      return {
        ...state,
        barbers: [...state.barbers.filter((x) => x.id !== payload.id), payload],
      };
    case DELETE:
      return {
        ...state,
        barbers: [...state.barbers.filter((x) => x.id !== payload)],
      };
    default:
      return {
        ...state,
      };
  }
}
