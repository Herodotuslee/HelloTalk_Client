import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  Container,
  Row,
  Col
} from "reactstrap";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { teacherLogin } from "../actions/teachers_actions";

class TeacherAuth extends Component {
  state = {
    user: {
      email: "",
      password: ""
    }
  };

  submitLogin(e) {
    e.preventDefault();
    // console.log(this.state.userLogin);

    this.props.teacherLogin(this.state.user).then(() => {
      console.log("this.props", this.props);
      this.props.history.push(`/teacher/${this.props.userLogin.id}/dashboard`);
    });
  }

  updateFormField(e) {
    let user = { ...this.state.user, [e.target.name]: e.target.value };
    this.setState({
      user
    });
  }

  render() {
    console.log("is userlogin here?", this.props);

    this.updateFormField = this.updateFormField.bind(this);
    return (
      <Container>
        <Row>
          <Col xs="6">
            <Card>
              <Form onSubmit={this.submitLogin.bind(this)}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                    onChange={this.updateFormField}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                    onChange={this.updateFormField}
                  />
                </FormGroup>

                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Form>
            </Card>
          </Col>
          <Col xs="6">
            <Card>
              <Form onSubmit={this.submitLogin.bind(this)}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                    onChange={this.updateFormField}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                    onChange={this.updateFormField}
                  />
                </FormGroup>

                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  teacherLogin
};
const mapStateToProps = ({ userLogin }) => ({ userLogin });

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeacherAuth)
);
