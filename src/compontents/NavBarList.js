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
            <NavLink href="/teacher/1/calander">
              First Teacher's Calander
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Student Calander</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">LognIn</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">SignIn</NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    );
  }
}
