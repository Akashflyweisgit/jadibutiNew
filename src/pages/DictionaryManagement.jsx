/** @format */

import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
} from "reactstrap";
import "./dictionary.css";

export const DictionaryManagement = () => {
  const [file, setFile] = useState(null);
  return (
    <div className="banner">
      <h1 className="heading-file">Upload Document</h1>
      <Form>
        <Card className="category-banner">
          <CardBody>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Upload
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleFile"
                  name="file"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
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
