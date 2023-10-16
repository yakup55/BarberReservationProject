import axios from "axios";

class ExperinceService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/experiences`;
  }
  async getExperincesList() {
    const url = `${this.baseUrl}`;
    return await axios.get(url).then((resp) => resp.data);
  }

  async getByIdExperince(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }

  async addExperince(experience) {
    const url = `${this.baseUrl}/addExperience`;
    return await axios
      .post(url, experience)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }

  async updateExperince(id, experience) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, experience).then((resp) => resp.data);
  }
  async deleteReservation(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default ExperinceService;
