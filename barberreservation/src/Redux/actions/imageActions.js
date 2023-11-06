import ImageService from "../services/imageService";
export const GET_LIST_IMAGE = "GET_LIST_IMAGE";

const service = new ImageService();

export function getImagesList() {
  return function (dispacth) {
    service
      .getImagesList()
      .then((resp) => dispacth({ type: GET_LIST_IMAGE, payload: resp }));
  };
}
