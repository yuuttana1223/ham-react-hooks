/* eslint-disable no-restricted-globals */
import { memo, useCallback, useContext } from "react";
import { ADD_OPERATION_LOG, DELETE_EVENT } from "../actions";
import { AppContext } from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

export const Event = memo(({ event: { id, title, body } }) => {
  const { dispatch } = useContext(AppContext);

  const deleteEvent = useCallback(() => {
    if (!confirm(`イベント(id=${id})を本当に削除しても良いですか？`)) return;
    dispatch({
      type: DELETE_EVENT,
      id: id,
    });

    dispatch({
      type: ADD_OPERATION_LOG,
      description: `イベント(id=${id})を削除しました。`,
      operatedAt: timeCurrentIso8601(),
    });
  }, [id, dispatch]);

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={deleteEvent}>
          削除
        </button>
      </td>
    </tr>
  );
});
