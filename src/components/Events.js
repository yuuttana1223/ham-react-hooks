import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Event } from "./Event";

export const Events = ({ events, dispatch }) => {
  const value = useContext(AppContext);
  return (
    <>
      <div>{value}</div>
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
    </>
  );
};
