/* eslint-disable no-restricted-globals */
import { useCallback, useContext, useState } from "react";
import { CREATE_EVENT, DELETE_ALL_EVENTS } from "../actions/events";
import { AppContext } from "../contexts/AppContext";

export const EventForm = () => {
  const {
    state: { events },
    dispatch,
  } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleClickAddEvent = useCallback(
    (e) => {
      e.preventDefault();
      // dipatch(action)
      dispatch({
        type: CREATE_EVENT,
        title: title,
        body: body,
      });
      setTitle("");
      setBody("");
    },
    [title, body, dispatch]
  );

  const handleClickDeleteAllEvents = useCallback(
    (e) => {
      e.preventDefault();
      if (!confirm("全てのイベントを本当に削除しても良いですか？")) return;

      dispatch({
        type: DELETE_ALL_EVENTS,
      });
    },
    [dispatch]
  );
  return (
    <>
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
        <button
          className="btn btn-primary"
          onClick={handleClickAddEvent}
          disabled={title.trim() === "" || body.trim() === ""}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={handleClickDeleteAllEvents}
          disabled={events.length === 0}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};
