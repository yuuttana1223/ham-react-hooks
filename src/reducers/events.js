import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  DELETE_EVENT,
} from "../actions/events";

// action = {
//   type: "CREATE_EVENT",
//   title: "タイトル",
//   body: "ボディー",
// };

export const eventsReducer = (events = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = events.length;
      // まだ要素がなければ、idが1でそうでなければ、最後のidの次のid
      const id = length === 0 ? 1 : events[length - 1].id + 1;
      return [...events, { id: id, ...event }];
    case DELETE_EVENT:
      return events.filter((event) => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return events;
  }
};
