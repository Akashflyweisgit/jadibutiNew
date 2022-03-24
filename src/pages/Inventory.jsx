/** @format */

import React from "react";
import { Table, Card, CardBody } from "reactstrap";
import "./inventory.css";

export const Inventory = () => {
  return (
    <div className="inventory">
      <h1 className="inventory-head">Inventory</h1>
      <Card>
        <CardBody>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export const ViewInventory = () => {
  return (
    <div>
      <h1> View Inventory</h1>
    </div>
  );
};
