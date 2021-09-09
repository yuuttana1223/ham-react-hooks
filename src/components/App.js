import "bootstrap/dist/css/bootstrap.min.css";
import { useCallback, useReducer, useState } from "react";
import { eventsReducer } from "../reducers";
import { Event } from "./Event";

const App = () => {
  const [events, dispatch] = useReducer(eventsReducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleClickAddEvent = useCallback(
    (e) => {
      e.preventDefault();
      // dipatch(action)
      dispatch({
        type: "CREATE_EVENT",
        title: title,
        body: body,
      });
      setTitle("");
      setBody("");
    },
    [title, body]
  );

  return (
    <>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input
              className="form-control"
              id="formEventTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formEventBody">ボディー</label>
            <textarea
              className="form-control"
              id="formEventBody"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleClickAddEvent}>
            イベントを作成する
          </button>
          <button className="btn btn-danger">全てのイベントを削除する</button>
        </form>
        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <Event key={index} event={event} dispatch={dispatch} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
