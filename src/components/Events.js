import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Event } from "./Event";

export const Events = () => {
  const { events } = useContext(AppContext);
  return (
    <>
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
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};
