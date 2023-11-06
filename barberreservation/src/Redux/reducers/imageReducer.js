import { GET_LIST_IMAGE } from "../actions/imageActions";
import { image, images } from "../initials/imageInitials";

const initialValues = {
  image,
  images,
};
export default function imageReducer(state = initialValues, { type, payload }) {
  switch (type) {
    case GET_LIST_IMAGE:
      return {
        ...state,
        images: payload,
      };

    default:
      return {
        ...state,
      };
  }
}
