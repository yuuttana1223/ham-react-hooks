import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";
import { AppContext } from "../contexts/AppContext";
import { eventsReducer } from "../reducers/events";
import { EventForm } from "./EventForm";
import { Events } from "./Events";

const App = () => {
  const [events, dispatch] = useReducer(eventsReducer, []);

  return (
    <AppContext.Provider value={{ events, dispatch }}>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <EventForm />
        <h4>イベント一覧</h4>
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
