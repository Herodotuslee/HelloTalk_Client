import {
  FETCH_STUDENT_SUCCESS,
  FETCH_STUDENT_FAILED,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAILED,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAILED,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAILED,
  LOGIN_STUDENT_SUCCESS
} from "../actions/students_actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_STUDENT_SUCCESS:
      return action.payload;
    case FETCH_STUDENT_FAILED:
      return action.payload;
    case ADD_STUDENT_SUCCESS:
      return [...state, action.payload];
    case ADD_STUDENT_FAILED:
      return state;
    case DELETE_STUDENT_SUCCESS:
      return state.filter(user => user.id !== action.payload);
    case DELETE_STUDENT_FAILED:
      return action.payload;
    case UPDATE_STUDENT_SUCCESS:
      return [...state, action.payload];
    case UPDATE_STUDENT_FAILED:
      return action.payload;
    case LOGIN_STUDENT_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
}
