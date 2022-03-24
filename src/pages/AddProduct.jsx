/** @format */
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./addproduct.css";
import { Table, Card, CardBody } from "reactstrap";
import { GrAdd } from "react-icons/gr";

export const AddProduct = () => {
  return (
    <div className="addproduct">
      <h1 className="head-product">Products</h1>
      <div className="btn">
        <Link to="/products" className="btn btn-outline-secondary btn-lg">
          <GrAdd /> <strong>Add</strong>
        </Link>
      </div>

      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Weight</th>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
