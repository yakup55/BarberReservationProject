import { quention, quentions } from "../initials/quentionInitials";
import {
  GET_LIST,
  GET_BY_ID,
  ADD,
  DELETE,
  UPDATE,
} from "../actions/quentionsActions";

const initialvales = {
  quention,
  quentions,
};
export default function quentionReducer(
  state = initialvales,
  { type, payload }
) {
  switch (type) {
    case GET_LIST:
      return {
        ...state,
        quentions: payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        quention: payload,
      };
    case ADD:
      return {
        ...state,
        quentions: [...state.quentions, payload],
      };
    case UPDATE:
      return {
        ...state,
        quentions: [
          ...state.quentions.filter((x) => x.id !== payload.id),
          payload,
        ],
      };
    case DELETE:
      return {
        ...state,
        quentions: [...state.quentions.filter((x) => x.id !== payload)],
      };
    default:
      return {
        ...state,
      };
  }
}
