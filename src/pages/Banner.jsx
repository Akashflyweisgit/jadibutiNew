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
import "./banner.css";

export const Banner = () => {
  const [banner, setBanner] = useState(null);
  return (
    <div className="banner">
      <h1 className="heading-banner">Banner</h1>
      <Form>
        <Card className="category-banner">
          <CardBody>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Upload Banner
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleFile"
                  name="file"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setBanner(e.target.files[0])}
                  className="input-img"
                />
              </Col>
            </FormGroup>
            <Button className="banner-btn" color="primary">
              Submit Details
            </Button>
          </CardBody>
        </Card>
      </Form>
    </div>
  );
};
