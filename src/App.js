import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import NavBarList from "./compontents/NavBarList";
import TeacherDetail from "./compontents/TeacherDetail";
import ShowAllTeachers from "./compontents/ShowAllTeachers";
import Teacher_Calendar from "./compontents/Teacher_Calendar";
import TeacherAuth from "./compontents/TeacherAuth";
import TeacherDashBoard from "./compontents/TeacherDashBoard";
import StudentAuth from "./compontents/StudentAuth";
import Student_Calendar from "./compontents/Student_Calendar";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <NavBarList />
          </div>
          <Switch>
            <Route exact path="/tutors" component={ShowAllTeachers} />
            <Route exact path="/teacher/login" component={TeacherAuth} />
            <Route exact path="/student/login" component={StudentAuth} />
            <Route exact path="/teacher/:id" component={TeacherDetail} />
            <Route
              exact
              path="/teacher/:id/calendar"
              component={Teacher_Calendar}
            />
            <Route
              exact
              path="/student/:id/calender"
              component={Student_Calendar}
            />
            <Route
              exact
              path="/teacher/1/dashboard"
              component={TeacherDashBoard}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
