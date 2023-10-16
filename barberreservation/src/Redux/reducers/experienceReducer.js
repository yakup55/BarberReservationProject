import { experience, experiences } from "../initials/experienceInitials";
import {
  GET_LIST,
  GET_BY_ID,
  ADD,
  DELETE,
  UPDATE,
} from "../actions/experienceActions";

const initialvales = {
  experience,
  experiences,
};
export default function experienceReducer(
  state = initialvales,
  { type, payload }
) {
  switch (type) {
    case GET_LIST:
      return {
        ...state,
        experiences: payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        experience: payload,
      };
    case ADD:
      return {
        ...state,
        experiences: [...state.experiences, payload],
      };
    case UPDATE:
      return {
        ...state,
        experiences: [
          ...state.experiences.filter((x) => x.id !== payload.id),
          payload,
        ],
      };
    case DELETE:
      return {
        ...state,
        experiences: [...state.experiences.filter((x) => x.id !== payload)],
      };
    default:
      return {
        ...state,
      };
  }
}
