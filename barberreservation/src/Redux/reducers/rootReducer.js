import aboutReducer from "./aboutReducer";
import barberReducer from "./barberReducer";
import hourReducer from "./hourReducer";
import experienceReducer from "./experienceReducer";
import reservationReducer from "./reservationReducer";
import userReducer from "./userReducer";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  barber: barberReducer,
  about: aboutReducer,
  user: userReducer,
  hour: hourReducer,
  experience: experienceReducer,
  reservation: reservationReducer,
});
export default rootReducer;
