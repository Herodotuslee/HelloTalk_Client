import React, { Component } from "react";
import { connect } from "react-redux";
import TeacherProfile from "./TeacherProfile";
import { Container, Col, Row } from "reactstrap";

class ShowAllTeachers extends Component {
  renderList() {
    return this.props.teachers.map(item => {
      return (
        <Col xs="3">
          <TeacherProfile key={item.id} item={item} />
        </Col>
      );
    });
  }
  render() {
    console.log(this.props.teachers);
    if (!this.props.teachers) {
      return <div>All teachers are Loading</div>;
    } else {
      return (
        <div>
          <Container>
            <Row>{this.renderList()}</Row>
          </Container>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ teachers }) => {
  return {
    teachers
  };
};

// const mapStateToProps = state => {
//   teac;
// };

export default connect(
  mapStateToProps,
  null
)(ShowAllTeachers);
