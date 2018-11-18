import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import NavBarList from "./compontents/NavBarList";
import TeacherDetail from "./compontents/TeacherDetail";
import ShowAllTeachers from "./compontents/ShowAllTeachers";
import Calander from "./compontents/Calander";
import TeacherAuth from "./compontents/TeacherAuth";
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
            <Route exact path="/teacher/:id" component={TeacherDetail} />
            <Route exact path="/teacher/:id/calander" component={Calander} />
            <Route exact path="/login/teacher" component={TeacherAuth} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
