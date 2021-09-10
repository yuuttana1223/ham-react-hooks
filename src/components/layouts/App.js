import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";
import { AppContext } from "../../contexts/AppContext";
import { rootReducer } from "../../reducers/rootReducer";
import { EventForm } from "../events/EventForm";
import { Events } from "../events/Events";
import { OperationLogs } from "../operationLogs/OperationLogs";

export const App = () => {
  const [state, dispatch] = useReducer(rootReducer, {
    // eventsはevents.jsの関数(const events)の名前に依存する
    events: [],
    operationLogs: [],
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};
