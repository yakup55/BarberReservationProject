import CalendarService from "../services/calendarService";

export const GET_LIST = "GET_LIST";
export const GET_BY_ID = "GET_BY_ID";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
const service = new CalendarService();

export function getList3() {
  return function (dispacth) {
    service
      .getCalendarsList()
      .then((resp) => dispacth({ type: GET_LIST, payload: resp }));
  };
}
export function getById(id) {
  return function (dispacth) {
    service
      .getCalendarById(id)
      .then((resp) => dispacth({ type: GET_BY_ID, payload: resp }));
  };
}

export function add(calendar) {
  return function (dispacth) {
    service
      .addCalendar(calendar)
      .then((resp) => dispacth({ type: ADD, payload: resp }));
  };
}
export function update(calendar) {
  return function (dispacth) {
    service
      .updateCalendar(calendar)
      .then((resp) => dispacth({ type: UPDATE, payload: resp }));
  };
}
export function deleted(id) {
  return function (dispacth) {
    service
      .deleteCalendar(id)
      .then((resp) => dispacth({ type: DELETE, payload: id }));
  };
}