import {
  AUTH_TEACHER_ERROR,
  LOGIN_TEACHER_ERROR
} from "../actions/teachers_actions";
import {
  AUTH_STUDENT_ERROR,
  LOGIN_STUDENT_ERROR
} from "../actions/students_actions";
const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TEACHER_ERROR:
      return ["You must be logged in to do that!"];
    case LOGIN_TEACHER_ERROR:
      return ["Your email or password was incorrect"];
    case AUTH_STUDENT_ERROR:
      return ["You must be logged in to do that!"];
    case LOGIN_STUDENT_ERROR:
      return ["Your email or password was incorrect"];
    default:
      return state;
  }
};
