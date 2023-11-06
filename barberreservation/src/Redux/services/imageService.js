import axios from "axios";

class ImageService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/images`;
  }
  async getImagesList() {
    const url = `${this.baseUrl}`;
    return await axios.get(url).then((resp) => resp.data);
  }
}
export default ImageService;
