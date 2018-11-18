import React, { Component } from "react";
import { connect } from "react-redux";
import TeacherProfile from "./TeacherProfile";
import { Container, Col, Row } from "reactstrap";

class ShowAllTeachers extends Component {
  renderList() {
    return this.props.teacher.map(item => {
      return (
        <Col xs="3">
          <TeacherProfile key={item.id} item={item} />
        </Col>
      );
    });
  }
  render() {
    return (
      <div>
        <Container>
          <Row>{this.renderList()}</Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ teacher }) => {
  return {
    teacher
  };
};

export default connect(
  mapStateToProps,
  null
)(ShowAllTeachers);
