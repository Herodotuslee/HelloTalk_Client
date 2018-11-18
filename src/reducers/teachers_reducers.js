import {
  FETCH_TEACHER_SUCCESS,
  FETCH_TEACHER_FAILED,
  ADD_TEACHER_SUCCESS,
  ADD_TEACHER_FAILED,
  DELETE_TEACHER_SUCCESS,
  DELETE_TEACHER_FAILED,
  UPDATE_TEACHER_SUCCESS,
  UPDATE_TEACHER_FAILED
} from "../actions/teachers_actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TEACHER_SUCCESS:
      return action.payload;
    case FETCH_TEACHER_FAILED:
      return action.payload;
    case ADD_TEACHER_SUCCESS:
      return [...state, action.payload];
    case ADD_TEACHER_FAILED:
      return state;
    case DELETE_TEACHER_SUCCESS:
      return state.filter(user => user.id !== action.payload);
    case DELETE_TEACHER_FAILED:
      return action.payload;
    case UPDATE_TEACHER_SUCCESS:
      return [...state, action.payload];
    case UPDATE_TEACHER_FAILED:
      return action.payload;
    default:
      return state;
  }
}
