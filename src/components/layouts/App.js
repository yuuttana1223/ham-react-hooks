import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useReducer } from "react";
import { AppContext } from "../../contexts/AppContext";
import { rootReducer } from "../../reducers/rootReducer";
import { EventForm } from "../events/EventForm";
import { Events } from "../events/Events";
import { OperationLogs } from "../operationLogs/OperationLogs";

const APP_KEY = "appWithRedux";

export const App = () => {
  const [state, dispatch] = useReducer(
    rootReducer,
    JSON.parse(localStorage.getItem(APP_KEY)) || {
      events: [],
      operationLogs: [],
    }
  );

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

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
