import React, { Component } from "react";
import { connect } from "react-redux";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { withRouter } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import Course from "./Course";

const divStyle = {
  margin: "40px",
  height: "10em",
  width: "10em"
  // border: "5px solid black"
};
class TeacherDetail extends Component {
  renderList() {
    return this.props.teachers.courses.map(item => {
      return (
        <Col xs="4">
          <Course
            key={item.id}
            course={item}
            this_teacher={this.props.teachers}
          />
        </Col>
      );
    });
  }
  render() {
    console.log("Info:", this.props.teachers);

    if (!this.props.teachers) {
      return <div>The teacher is Loading</div>;
    } else {
      return (
        <Container>
          <Card>
            <Row>
              {" "}
              <CardImg
                style={divStyle}
                top
                width="100%"
                src={this.props.teachers.picture_URL}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{this.props.teachers.name}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>{this.props.teachers.introduction}</CardText>
              </CardBody>
            </Row>
            <Row>{this.renderList()}</Row>
          </Card>
        </Container>
      );
    }
  }
}

const mapStateToProps = ({ teachers }, props) => {
  return {
    teachers: teachers.find(item => {
      return item.id === Number(props.match.params.id);
    })
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(TeacherDetail)
);
