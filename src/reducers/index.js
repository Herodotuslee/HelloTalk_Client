import { combineReducers } from "redux";
import teachers_reducers from "./teachers_reducers";
import auth_reducers from "./auth_reducers";

const rootReducer = combineReducers({
  teachers: teachers_reducers,
  userLogin: auth_reducers
});

export default rootReducer;
