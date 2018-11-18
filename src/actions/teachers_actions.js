import axios from "axios";

export const FETCH_TEACHER_SUCCESS = "FETCH_TEACHER_SUCCES";
export const FETCH_TEACHER_FAILED = "FETCH_TEACHER_FAILED";
export const ADD_TEACHER_SUCCESS = "ADD_TEACHER_SUCCESS";
export const ADD_TEACHER_FAILED = "ADD_TEACHER_FAILED";
export const DELETE_TEACHER_SUCCESS = "DELETE_TEACHER_SUCCESS";
export const DELETE_TEACHER_FAILED = "DELETE_TEACHER_FAILED";
export const UPDATE_TEACHER_SUCCESS = "UPDATE_TEACHER_SUCCESS";
export const UPDATE_TEACHER_FAILED = "UPDATE_TEACHER_FAILED";
export const fetchTeacher = () => dispatch => {
  axios
    .get("http://localhost:8080/teacher")

    .then(response => {
      return dispatch({
        type: FETCH_TEACHER_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: FETCH_TEACHER_FAILED, payload: err }));
};

export const deleteExpense = id => dispatch => {
  axios
    .delete(`http://localhost:8080/teacher/${id}`)
    .then(response => dispatch({ type: DELETE_TEACHER_SUCCESS, payload: id }))
    .catch(err => dispatch({ type: DELETE_TEACHER_FAILED, payload: err }));
};

// TEACHER SIGN IN
export const addTeacher = teacher => dispatch => {
  console.log(teacher);
  return axios
    .post("http://localhost:8000/signin/teacher", teacher)
    .then(response => {
      dispatch({
        type: ADD_TEACHER_SUCCESS,
        payload: response.data
      });
    })
    .catch(err =>
      dispatch({
        type: ADD_TEACHER_FAILED,
        payload: err
      })
    );
};

export const updateTeacher = (teacher, id) => dispatch => {
  return axios
    .patch(`http://localhost:8000/edit/${id}`, teacher)
    .then(response => {
      dispatch({
        type: UPDATE_TEACHER_SUCCESS,
        payload: response.data
      });
    })
    .catch(err =>
      dispatch({
        type: UPDATE_TEACHER_FAILED,
        payload: err
      })
    );
};
