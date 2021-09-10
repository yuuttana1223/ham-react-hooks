import { combineReducers } from "redux";
import { eventsReducer } from "./eventsReducer";
import { operationLogsReducer } from "./operationLogsReducer";

export const rootReducer = combineReducers({
  events: eventsReducer,
  operationLogs: operationLogsReducer,
});
