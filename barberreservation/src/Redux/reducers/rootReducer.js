import aboutReducer from "./aboutReducer";
import barberReducer from "./barberReducer";
import hourReducer from "./hourReducer";
import reservationReducer from "./reservationReducer";
import userReducer from "./userReducer";
import calendarReducer from "./calendarReducer";
import quentionReducer from "./quentionsReducer";
import contactReducer from "./contactReducer";
import { appReducer } from "./appReducer";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  barber: barberReducer,
  about: aboutReducer,
  user: userReducer,
  hour: hourReducer,
  reservation: reservationReducer,
  calendar: calendarReducer,
  contact: contactReducer,
  quention: quentionReducer,
  app: appReducer,
});
export default rootReducer;
