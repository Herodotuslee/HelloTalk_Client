import React, { Component } from "react";
// import Course from "./Course";
// import Calander from "./Calander";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col
} from "reactstrap";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
  // Button
} from "reactstrap";
import Course from "./Course";
import TeacherDashCourse from "./TeacherDashCourse";
import Teacher_Calander from "./Teacher_Calendar";

const cardStyle = {
  margin: "0.3em"
};
const divStyle = {
  margin: "40px",
  height: "20em",
  width: "20em"
  // border: "5px solid black"
};

class TeacherDashBoard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <Card>
              <CardBody>
                <CardTitle>Create New Lesson</CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Course Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id="coursename"
                      placeholder="name placeholder"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="point_cost">Point Coust</Label>
                    <Input
                      type="text"
                      name="point_cost"
                      id="point_cos"
                      placeholder="point placeholder"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="language">Language</Label>
                    <Input
                      type="text"
                      name="language"
                      id="language"
                      placeholder="language placeholder"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="introduction">Introduction</Label>
                    <Input
                      type="text"
                      name="introduction"
                      id="introduction"
                      placeholder="password placeholder"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="course_picture">Picture</Label>
                    <Input
                      type="text"
                      name="course_picture"
                      id="course_picture"
                      placeholder="picture placeholder"
                    />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col xs="3">
            <Card>
              <CardBody>
                <CardTitle>Create New Schedule </CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Course Time</Label>
                    <Input
                      type="text"
                      name="name"
                      id="coursename"
                      placeholder="name placeholder"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleSelect">Select Course</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>

          <Col xs="6">
            <Card>
              <CardImg
                style={divStyle}
                top
                width="100%"
                src="https://avatars0.githubusercontent.com/u/29159531?s=460&v=4"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Welcome Teacher Albert</CardTitle>
                <CardTitle>Email</CardTitle>
                <CardTitle>Point:1000~</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Teacher_Calander />

        <TeacherDashCourse />
      </Container>
    );
  }
}

const mapStateToProps = ({ teacher }, props) => {
  return {
    teacher: teacher.find(item => {
      console.log("here", item);
      return item.id === Number(1);
    })
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(TeacherDashBoard)
);
