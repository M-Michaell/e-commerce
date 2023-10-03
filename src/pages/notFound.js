import React from "react";
import image from "../assets/404-error-template-10.jpg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center my-5">
      <img
        className="img-fluid w-100 position-relative"
        src={image}
        alt="erroe"
      />
      <button
        className="btn btn-outline-primary position-absolute start-50 translate-middle-x "
        style={{ top: "70%" }}
      >
        <Link className="nav-link " to="/">
          Home Page
        </Link>
      </button>
    </div>
  );
}

export default NotFound;
