/* eslint-disable no-restricted-globals */
import { memo, useCallback, useContext, useState } from "react";
import {
  ADD_OPERATION_LOG,
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  DELETE_ALL_OPERATION_LOGS,
} from "../../actions";
import { AppContext } from "../../contexts/AppContext";
import { timeCurrentIso8601 } from "../../utils";

export const EventForm = memo(() => {
  const {
    state: { events, operationLogs },
    dispatch,
  } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = useCallback(
    (e) => {
      e.preventDefault();
      // dipatch(action)
      dispatch({
        type: CREATE_EVENT,
        title: title,
        body: body,
      });

      dispatch({
        type: ADD_OPERATION_LOG,
        description: "イベントを作成しました。",
        operatedAt: timeCurrentIso8601(),
      });

      setTitle("");
      setBody("");
    },
    [title, body, dispatch]
  );

  const deleteAllEvents = useCallback(
    (e) => {
      e.preventDefault();
      if (!confirm("全てのイベントを本当に削除しても良いですか？")) return;

      dispatch({
        type: DELETE_ALL_EVENTS,
      });

      dispatch({
        type: ADD_OPERATION_LOG,
        description: "すべてのイベントを削除しました。",
        operatedAt: timeCurrentIso8601(),
      });
    },
    [dispatch]
  );

  const deleteAllOperationLogs = useCallback(
    (e) => {
      e.preventDefault();
      if (!confirm("全ての操作ログを本当に削除しても良いですか？")) return;

      dispatch({
        type: DELETE_ALL_OPERATION_LOGS,
      });
    },
    [dispatch]
  );

  return (
    <>
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
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={title.trim() === "" || body.trim() === ""}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={events.length === 0}
        >
          全てのイベントを削除する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllOperationLogs}
          disabled={operationLogs.length === 0}
        >
          全ての操作ログを削除する
        </button>
      </form>
    </>
  );
});
