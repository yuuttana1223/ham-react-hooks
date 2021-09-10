import { combineReducers } from "redux";
import { events } from "./eventsReducer";

export const rootReducer = combineReducers({
  events,
});
