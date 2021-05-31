import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import commonReducer from "./common.reducer";
import bookingReducer from "./booking.reducer";
import userReducer from "./user.reducer";
const rootReducer = combineReducers({
  common: commonReducer,
  movie: movieReducer,
  booking: bookingReducer,
  user: userReducer,
});

export default rootReducer;
