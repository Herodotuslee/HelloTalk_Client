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
    return this.props.teacher.courses.map(item => {
      return (
        <Col xs="3">
          <Course
            key={item.id}
            course={item}
            this_teacher={this.props.teacher}
          />
        </Col>
      );
    });
  }
  render() {
    console.log("Info:", this.props.teacher);

    if (!this.props.teacher) {
      return <div>Loading</div>;
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
                src={this.props.teacher.picture_URL}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{this.props.teacher.name}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>{this.props.teacher.introduction}</CardText>
              </CardBody>
            </Row>
            <Row>{this.renderList()}</Row>
          </Card>
        </Container>
      );
    }
  }
}

const mapStateToProps = ({ teacher }, props) => {
  return {
    teacher: teacher.find(item => {
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
