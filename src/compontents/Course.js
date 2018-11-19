import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

import { Link } from "react-router-dom";

// const coursepicstyle = {
//   width: "15em",
//   height: "15em",
//   margintop: "2em",
//   padding: "0em 2em 0em 2em"
// };
class Course extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src={this.props.course.course_picture}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.course.name}</CardTitle>
            <CardSubtitle>
              Points coust:{this.props.course.point_cost}
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>

            <Link
              style={{ marginLeft: `1em` }}
              className="btn btn-secondary"
              to={`/teacher/${this.props.this_teacher.id}/calendar`}
            >
              Request Lesson
            </Link>
          </CardBody>
        </Card>
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
)(Course);
