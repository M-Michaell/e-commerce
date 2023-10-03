import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import { Link } from "react-router-dom";
import CardBtn from "../cart/cartbtns";

function Productcard(props) {
  const { productdata, handleNavigate } = props;
  //   console.log(productdata);
  return (
    <div className="card h-100 p-4 border">
      {productdata.stock ? (
        <button
          type="button"
          className="btn btn-success position-absolute rounded-pill m-3"
        >
          in stock
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {productdata.stock}
          </span>
        </button>
      ) : (
        <button type="button" className="btn btn-primary position-relative">
          out of stock{" "}
        </button>
      )}
      <img
        src={productdata.images[0]} //thumbnail
        className="card-img-top  h-50 "
        style={{ hight: "250px" }}
        alt="..."
      />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title ">
            <Link
              className="text-decoration-none text-success fs-3 m-3"
              to={`/product-details/${productdata.id}`}
            >
              {productdata.title}
            </Link>
          </h5>
          <h5>
            <sup>$</sup>
            {productdata.price}
            <sup>.00</sup>
          </h5>
        </div>

        <p
          className="card-text d-inline-block text-truncate ms-3"
          style={{ maxWidth: "100%" }}
        >
          {productdata.description}
        </p>
        <div className="my-3">
          <span className="card-text fs-5 pb-4">
            rating :{productdata.rating}{" "}
          </span>
          <span className="mx-5">
            <Rating
              name="text-feedback"
              value={productdata.rating}
              readOnly
              precision={0.1}
              emptyIcon={
                <StarIcon style={{ opacity: 0.8 }} fontSize="inherit" />
              }
            />
          </span>
        </div>

        <div className="mt-5">
          <button
            type="button"
            className="btn btn-success rounded-pill d-block mx-auto w-75 my-3 p-2 fs-5 "
            onClick={() => handleNavigate(productdata.id)}
          >
            View Details
          </button>
          <br></br>

          <div className="d-flex align-content-center">
            <CardBtn item={productdata} className="p-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productcard;
