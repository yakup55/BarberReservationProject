import BarberService from "../services/barberService";

export const GET_LIST = "GET_LIST";
export const GET_BY_ID = "GET_BY_ID";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
const service = new BarberService();

export function getList() {
  return function (dispacth) {
    service
      .getBarbersList()
      .then((resp) => dispacth({ type: GET_LIST, payload: resp }));
  };
}
export function getById(id) {
  return function (dispacth) {
    service
      .getByIdBarber(id)
      .then((resp) => dispacth({ type: GET_BY_ID, payload: resp }));
  };
}

export function add(barber) {
  return function (dispacth) {
    service
      .addBarber(barber)
      .then((resp) => dispacth({ type: ADD, payload: resp }));
  };
}
export function update(barber) {
  return function (dispacth) {
    service
      .updateBarber(barber)
      .then((resp) => dispacth({ type: UPDATE, payload: resp }));
  };
}
export function deleted(id) {
  return function (dispacth) {
    service
      .deleteBarber(id)
      .then((resp) => dispacth({ type: DELETE, payload: id }));
  };
}
