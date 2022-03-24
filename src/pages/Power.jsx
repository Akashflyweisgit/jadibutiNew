/** @format */

import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import "./power.css";

export const Power = () => {
  return (
    <div className="power">
      <h1 className="head-super">Super Admin Powers</h1>
      <Card className="power-card">
        <CardBody>
          <CardTitle>
            <strong>Assign Powers</strong>
          </CardTitle>
          <Form>
            <FormGroup row className="first-box">
              <Input type="checkbox" />
              <Label check>Add Admin</Label>
            </FormGroup>
            <FormGroup row className="first-box">
              <Input type="checkbox" />
              <Label check>Delete Admin </Label>
            </FormGroup>
            <FormGroup row className="first-box">
              <Input type="checkbox" />
              <Label check>Edit Admin</Label>
            </FormGroup>
            <FormGroup row className="first-box">
              <Input type="checkbox" />
              <Label check>Update Admin</Label>
            </FormGroup>
            <FormGroup row className="first-box">
              <Input type="checkbox" />
              <Label check>Add Vendor</Label>
            </FormGroup>
            <FormGroup row className="first-box">
              <Input type="checkbox" />
              <Label check>Delete Vendor</Label>
            </FormGroup>
            <FormGroup row className="first-box">
              <Input type="checkbox" />
              <Label check>Edit Vendor</Label>
            </FormGroup>
            <FormGroup row className="first-box">
              <Input type="checkbox" />
              <Label check>Update Vendor </Label>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};
