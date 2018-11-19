import React, { Component } from "react";
import { connect } from "react-redux";
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Container, Card, CardBody, CardTitle } from "reactstrap";
import { withRouter } from "react-router-dom";
const localizer = Calendar.momentLocalizer(moment);

class Teacher_Calendar extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      },
      {
        start: "2018-11-29 17:00",
        end: "2018-11-29 17:50",
        title: "Hello"
      }
    ]
  };

  render() {
    console.log("teacher_info", this.props.teacher);

    if (!this.props.teacher) {
      return <div>The Calander is Loading</div>;
    } else {
      return (
        <Container className="App">
          <Card>
            <CardBody>
              <CardTitle>{this.props.teacher.name}'s Schedule </CardTitle>
              <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="week"
                events={this.state.events}
                style={{ height: "100vh" }}
              />
            </CardBody>
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
  )(Teacher_Calendar)
);
