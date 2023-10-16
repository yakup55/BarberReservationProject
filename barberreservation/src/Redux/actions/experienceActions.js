import ExperienceService from "../services/experienceService";

export const GET_LIST = "GET_LIST";
export const GET_BY_ID = "GET_BY_ID";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
const service = new ExperienceService();

export function getList() {
  return function (dispacth) {
    service
      .getExperincesList()
      .then((resp) => dispacth({ type: GET_LIST, payload: resp }));
  };
}
export function getById(id) {
  return function (dispacth) {
    service
      .getByIdExperince(id)
      .then((resp) => dispacth({ type: GET_BY_ID, payload: resp }));
  };
}

export function add(experience) {
  return function (dispacth) {
    service
      .addExperince(experience)
      .then((resp) => dispacth({ type: ADD, payload: resp }));
  };
}
export function update(experience) {
  return function (dispacth) {
    service
      .updateExperince(experience)
      .then((resp) => dispacth({ type: UPDATE, payload: resp }));
  };
}
export function deleted(id) {
  return function (dispacth) {
    service
      .deleteReservation(id)
      .then((resp) => dispacth({ type: DELETE, payload: id }));
  };
}
