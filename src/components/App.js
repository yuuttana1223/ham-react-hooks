import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";
import { eventsReducer } from "../reducers/events";
import { EventForm } from "./EventForm";
import { Events } from "./Events";

const App = () => {
  const [events, dispatch] = useReducer(eventsReducer, []);

  return (
    <>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <EventForm events={events} dispatch={dispatch} />
        <h4>イベント一覧</h4>
        <Events events={events} dispatch={dispatch} />
      </div>
    </>
  );
};

export default App;
