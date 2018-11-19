import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class NavBarList extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tutors">Tutors</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/teacher/1/calendar">
              First Teacher's Calander
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/student/1/calender">First Student Calander</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/student/1/dashboard">
              First Student DashBoard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/teacher/1/dashboard">
              First Teacher DashBoard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="http://localhost:8080/swagger-ui.html#/">
              Back End Route
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/teacher/login">Teacher</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/student/login">Student</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/logout">Logout</NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    );
  }
}
