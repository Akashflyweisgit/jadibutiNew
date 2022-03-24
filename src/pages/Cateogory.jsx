/** @format */

import React, { useState } from "react";
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
import "./category.css";

export const Cateogory = () => {
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  return (
    <div className="category">
      <h1 className="heading-category">Category Details</h1>
      <Form>
        <Card className="category-card">
          <CardBody>
            <FormGroup>
              <Label for="exampleEmail">Select Category</Label>
              <select
                id="exampleEmail"
                name="select"
                placeholder="with a placeholder"
                type="select"
                className="select-category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>options1</option>
              </select>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Add Image
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleFile"
                  name="file"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="input-img"
                />
              </Col>
            </FormGroup>
            <Button className="category-btn" color="primary">
              Submit Details
            </Button>
          </CardBody>
        </Card>
      </Form>
    </div>
  );
};
