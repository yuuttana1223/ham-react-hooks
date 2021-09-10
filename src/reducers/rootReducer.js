import { combineReducers } from "redux";
import { events } from "./eventsReducer";
import { operationLogs } from "./operationLogsReducer";

export const rootReducer = combineReducers({
  events,
  operationLogs,
});
