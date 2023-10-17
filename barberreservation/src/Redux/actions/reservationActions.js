import ReservationService from "../services/reservationService";

export const GET_LIST = "GET_LIST";
export const GET_BY_ID = "GET_BY_ID";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
const service = new ReservationService();

export function getList5() {
  return function (dispacth) {
    service
      .getReservationsList()
      .then((resp) => dispacth({ type: GET_LIST, payload: resp }));
  };
}
export function getById(id) {
  return function (dispacth) {
    service
      .getByIdReservation(id)
      .then((resp) => dispacth({ type: GET_BY_ID, payload: resp }));
  };
}

export function add(reservation) {
  return function (dispacth) {
    service
      .addReservation(reservation)
      .then((resp) => dispacth({ type: ADD, payload: resp }));
  };
}
export function update(reservation) {
  return function (dispacth) {
    service
      .updateReservation(reservation)
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
