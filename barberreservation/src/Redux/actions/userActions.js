import UserService from "../services/userService";

export const GET_LIST = "GET_LIST";
export const GET_BY_ID = "GET_BY_ID";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
const service = new UserService();

export function getList6() {
  return function (dispacth) {
    service
      .getUsersList()
      .then((resp) => dispacth({ type: GET_LIST, payload: resp }));
  };
}
export function getById(id) {
  return function (dispacth) {
    service
      .getByIdUser(id)
      .then((resp) => dispacth({ type: GET_BY_ID, payload: resp }));
  };
}

export function add(user) {
  return function (dispacth) {
    service
      .addUser(user)
      .then((resp) => dispacth({ type: ADD, payload: resp }));
  };
}
export function update(user) {
  return function (dispacth) {
    service
      .updateUser(user)
      .then((resp) => dispacth({ type: UPDATE, payload: resp }));
  };
}
export function deleted(id) {
  return function (dispacth) {
    service
      .deleteUser(id)
      .then((resp) => dispacth({ type: DELETE, payload: id }));
  };
}
