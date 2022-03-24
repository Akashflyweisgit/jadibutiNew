/** @format */

import React from "react";
import "./discount.css";
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

export const DiscountCoupons = () => {
  return (
    <div className='discount'>
      <h1 className="head-discount">Discount Coupons</h1>
      <div>
        <Card className="product-card">
          <CardBody>
            <Form>
              <FormGroup row>
                <Label for="exampleSelect" sm={2} className="prod-name">
                  Expiry Date
                </Label>
                <Col sm={10}>
                  <Input
                    className="mb-3 select-date"
                    type="date"
                    
                  >
                    <option>Default Select1</option>
                    <option>Default Select</option>
                    <option>Default Select</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="exampleText" sm={2} className="prod-name">
                  Product Rating
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    className="input-desc"
                   
                  />
                </Col>
              </FormGroup>

              <Button className="details-btn" color="primary">
                Submit Details
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
