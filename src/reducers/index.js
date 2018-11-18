import { combineReducers } from "redux";
import teachers_reducers from "./teachers_reducers";

const rootReducer = combineReducers({
  teacher: teachers_reducers
});

export default rootReducer;
