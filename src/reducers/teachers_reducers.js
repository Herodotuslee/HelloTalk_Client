import {
  FETCH_TEACHER_SUCCESS,
  FETCH_TEACHER_FAILED
} from "../actions/teachers_actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TEACHER_SUCCESS:
      // return [state, ...action.payload];
      return action.payload;
    case FETCH_TEACHER_FAILED:
      // return action.payload;
      return [state, action.payload];

    default:
      return state;
  }
}
