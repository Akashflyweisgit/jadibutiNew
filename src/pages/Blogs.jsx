/** @format */

import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import "./blog.css";

export const Blogs = () => {
  return (
    <div>
      {" "}
      <h1 className="head-blog">Blogs Page</h1>
      <Card>
        <CardImg alt="Card image cap" src="https://picsum.photos/256/186" top />
        <CardBody>
          <CardTitle tag="h5">My Blog</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Blog subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. This is
            a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer. This is a
            wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer. This is a
            wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer. This is a
            wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </CardText>
          <Button className="blog-submit">Submit Blog</Button>
        </CardBody>
      </Card>
    </div>
  );
};

// export const AddBlogs = () => {
//   return (
//     <div>
//       {" "}
//       <h1> Add Blogs page</h1>
//     </div>
//   );
// };

export const ManageBlogs = () => {
  return (
    <div>
      {" "}
      <h1> Manage Blogs page</h1>
    </div>
  );
};
