import React, { Component } from "react";
// import Course from "./Course";
// import Calander from "./Calander";
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

// const divStyle = {
//   margin: "40px",
//   height: "20em",
//   width: "20em",
//   border: "5px solid black"
// };

const cardStyle = {
  margin: "0.3em"
};
class TeacherProfile extends Component {
  render() {
    return (
      <div>
        <Card style={cardStyle}>
          <CardImg
            top
            width="300px"
            src={this.props.item.picture_URL}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <div>{this.props.item.name}</div>
            </CardTitle>
            <CardSubtitle>
              {" "}
              <div>{this.props.item.language}</div>
            </CardSubtitle>
            <CardText>{this.props.item.introduction}</CardText>

            <Link
              style={{ marginLeft: `1em` }}
              className="btn btn-secondary"
              to={`/teacher/${this.props.item.id}`}
            >
              More
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default TeacherProfile;
