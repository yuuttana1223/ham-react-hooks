import { CREATE_EVENT, DELETE_ALL_EVENTS, DELETE_EVENT } from "../actions";

// action = {
//   type: "CREATE_EVENT",
//   title: "タイトル",
//   body: "ボディー",
// };

export const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      // まだ要素がなければ、idが1でそうでなければ、最後のidの次のid
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id: id, ...event }];
    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};
