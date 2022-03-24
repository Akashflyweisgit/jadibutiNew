/** @format */

import React, { useState } from "react";
import "./product.css";
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
import { type } from "@testing-library/user-event/dist/type";

export const Product = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(null);
  const [weight, setWeight] = useState(null);
  const [form, setForm] = useState("");

  // console.log(price)

  return (
    <div className="product">
      <div>
        <Card className="product-card">
          <h1 className="heading-product"> Add Products</h1>
          <CardBody>
            <Form>
              <FormGroup row>
                <Label for="exampleSelect" sm={2} className="prod-name">
                  Product Name
                </Label>
                <Col sm={10}>
                  <select
                    className="mb-3 select-name"
                    type="select"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  >
                    <option>Default Select1</option>
                    <option>Default Select</option>
                    <option>Default Select</option>
                  </select>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="exampleText" sm={2} className="prod-name">
                  Product Description
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    className="input-desc"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                    required='required'
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText" sm={2} className="prod-name">
                  Add Image
                </Label>
                <Col sm={10}>
                  <Input
                    className="input-img"
                    id="exampleFile"
                    name="file"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required='required'
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="exampleEmail" sm={2} className="prod-name">
                  Price Range
                </Label>
                <Col sm={10}>
                  <Input
                    className="input-price"
                    id="exampleEmail"
                    name="price"
                    placeholder="Price Range (In Rs)"
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    required='required'
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="exampleSelect" sm={2}>
                  Weight
                </Label>
                <Col sm={10}>
                  <select
                    id="exampleSelect"
                    name="select"
                    type="select"
                    className="select-weight"
                    onChange={(e) => setWeight(e.target.value)}
                    value={weight}
                  >
                    <option>100 grams</option>
                    <option>100 grams</option>
                    <option>100 grams</option>
                    <option>100 grams</option>
                    <option>100 grams</option>
                  </select>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" sm={2}>
                  Form
                </Label>
                <Col sm={10}>
                  <select
                    id="exampleSelect"
                    name="select"
                    type="select"
                    className="select-form"
                    onChange={(e) => setForm(e.target.value)}
                    value={form}
                  >
                    <option>Natural</option>
                    <option>Powder</option>
                  </select>
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

export const ViewProduct = () => {
  return (
    <div className="services">
      <h1>View Product</h1>
    </div>
  );
};
