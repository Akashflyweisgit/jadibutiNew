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

export const Admins = () => {
  return (
    <div>
      <h1>Admins</h1>
    </div>
  );
};

export const AddAdmins = () => {
  return (
    <div>
      <div className="power">
        <h1 className="head-super">Super Admin Powers</h1>
        <Card className="power-card">
          <CardBody>
            <CardTitle>
              <strong>Assign Powers To Admins</strong>
            </CardTitle>
            <Form>
              <FormGroup row className="first-box">
                <Input type="checkbox" />
                <Label check>Add Products</Label>
              </FormGroup>
              <FormGroup row className="first-box">
                <Input type="checkbox" />
                <Label check>View Products </Label>
              </FormGroup>
              <FormGroup row className="first-box">
                <Input type="checkbox" />
                <Label check>Category</Label>
              </FormGroup>
              <FormGroup row className="first-box">
                <Input type="checkbox" />
                <Label check>Discount Coupons</Label>
              </FormGroup>
              <FormGroup row className="first-box">
                <Input type="checkbox" />
                <Label check>Banner</Label>
              </FormGroup>
              <FormGroup row className="first-box">
                <Input type="checkbox" />
                <Label check>Inventory</Label>
              </FormGroup>
              <FormGroup row className="first-box">
                <Input type="checkbox" />
                <Label check>Customer Support </Label>
              </FormGroup>
              <FormGroup row className="first-box">
                <Input type="checkbox" />
                <Label check> Add Blog </Label>
              </FormGroup>
              <FormGroup row className="first-box">
                <Input type="checkbox" />
                <Label check>Dictionary </Label>
              </FormGroup>
              <FormGroup row className="first-box">
                <Input type="checkbox" />
                <Label check>History </Label>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export const ManageAdmins = () => {
  return (
    <div>
      <h1> View Admins</h1>
    </div>
  );
};
