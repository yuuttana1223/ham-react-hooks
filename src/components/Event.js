/* eslint-disable no-restricted-globals */
import { memo, useCallback, useContext } from "react";
import { DELETE_EVENT } from "../actions";
import { AppContext } from "../contexts/AppContext";

export const Event = memo(({ event: { id, title, body } }) => {
  const { dispatch } = useContext(AppContext);

  const handleClickDeleteEvent = useCallback(() => {
    if (!confirm(`イベント(id=${id})を本当に削除しても良いですか？`)) return;
    dispatch({
      type: DELETE_EVENT,
      id: id,
    });
  }, [id, dispatch]);

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteEvent}
        >
          削除
        </button>
      </td>
    </tr>
  );
});
