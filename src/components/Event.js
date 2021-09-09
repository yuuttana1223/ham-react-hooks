import { memo, useCallback } from "react";

export const Event = memo(({ event: { id, title, body }, dispatch }) => {
  const handleClickDeleteEvent = useCallback(() => {
    dispatch({
      type: "DELETE_EVENT",
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
