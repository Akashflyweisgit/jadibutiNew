/** @format */

import React from "react";
import { Table } from "reactstrap";
import "./coupon.css";

export const Coupons = () => {
  return (
    <div className="coupons">
      <h1 className="head-coupon">Coupons page</h1>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Expiry Date</th>
            <th>Coupon Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

// export const DiscountCoupons = () => {
//   return (
//     <div>
//       <h1>Discount Coupons</h1>
//     </div>
//   );
// };
