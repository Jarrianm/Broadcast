import { FETCH_USER } from "../actions/types";

export default function (state = null, action) {
// console.log(action)
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false
      //stops returning an empty string when a user isnt logged in
    default:
      return state;
  }
}
