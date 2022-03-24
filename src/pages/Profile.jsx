/** @format */

import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormText,
  Row,
} from "reactstrap";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <h1 className="head-profile">Profile</h1>
      <Card>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail" hidden>
                Email
              </Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                required
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="examplePassword" hidden>
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
              />
            </FormGroup>{" "}
            <Button className="submit" color="success">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
