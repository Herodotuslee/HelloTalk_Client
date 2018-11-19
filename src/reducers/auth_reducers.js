import {
  ADD_TEACHER_SUCCESS,
  ADD_TEACHER_FAILED,
  DELETE_TEACHER_SUCCESS,
  DELETE_TEACHER_FAILED,
  UPDATE_TEACHER_SUCCESS,
  UPDATE_TEACHER_FAILED,
  LOGIN_TEACHER_SUCCESS
} from "../actions/teachers_actions";

const initialState = { loggedIn: false, token: localStorage.getItem("token") };
export default function(state = initialState, action) {
  switch (action.type) {
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
    case LOGIN_TEACHER_SUCCESS:
      console.log("the login success payload", action.payload);
      localStorage.setItem("token", action.payload[0]);
      return { ...state, token: action.payload[0], id: action.payload[1] };
    default:
      return state;
  }
}
