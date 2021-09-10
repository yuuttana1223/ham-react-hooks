import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";
import { AppContext } from "../contexts/AppContext";
import { rootReducer } from "../reducers/rootReducer";
import { EventForm } from "./EventForm";
import { Events } from "./Events";

export const App = () => {
  const [state, dispatch] = useReducer(rootReducer, {
    // eventsはevents.jsの関数(const events)の名前に依存する
    events: [],
    operationLogs: [],
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <EventForm />
        <h4>イベント一覧</h4>
        <Events />
      </div>
    </AppContext.Provider>
  );
};
