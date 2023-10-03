import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { axiosInstance } from "../../apis/config";
import CardBtn from "../cart/cartbtns";

function ProductDetailCompo() {
  const [productDetails, setProductDetails] = useState([]);
  const params = useParams();
  const id = params.id;
  // console.log(id);
  const oldPrice = parseInt(productDetails.price);
  const newPrice =
    (productDetails.price * (100 - productDetails.discountPercentage)) / 100;
  const dollars = parseInt(newPrice);

  // console.log(newPrice);
  // console.log(dollars);
  // console.log(oldPrice);

  useEffect(() => {
    axiosInstance
      .get(`${id}`)
      .then((res) => {
        setProductDetails(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return productDetails ? (
    <div className="container">
      <div className="card mb-3">
        <div className="row g-0 gx-3">
          <div className="col-7">
            <img
              src={productDetails.thumbnail}
              className="img-fluid rounded-start h-100 w-70 "
              alt="..."
            />
          </div>
          <div className="col-5">
            <div className="card-body">
              <h5 className="card-title fs-2">{productDetails.title}</h5>
              <p className="card-text">{productDetails.description}</p>
              <hr />
              <div className="my-5">
                <div className="fs-5">
                  <span className="text-decoration-line-through me-2">
                    ${oldPrice}
                    <sup>.99</sup>
                  </span>
                  <span>
                    {" "}
                    ${dollars}
                    <sup>.99</sup>
                  </span>
                  <span className="ms-3">
                    {" "}
                    Discount : {productDetails.discountPercentage} %
                  </span>
                  <p className="fs-6 my-3">
                    This product is on sale! Great Discount available today.
                    Limited time offer
                  </p>
                </div>
                <hr className="my-3"></hr>
                {/* stock condi */}
                {productDetails.stock ? (
                  <button
                    type="button"
                    className="btn btn-success position-relative rounded-pill my-3 px-4 "
                  >
                    in stock{" "}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {productDetails.stock}{" "}
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-danger position-relative rounded-pill "
                  >
                    out of stock{" "}
                  </button>
                )}
                {/* stock condi */}
                <span className="d-block fs-6 mb-2">more information</span>
                <button
                  type="button "
                  className="btn 
                  text-black more   rounded-5"
                >
                  {productDetails.category}
                </button>
                <button
                  type="button "
                  className="btn 
                  text-black more rounded-5 mx-3"
                >
                  {productDetails.brand}
                </button>
                <hr className="my-4 mb-5"></hr>
                <div className="mx-auto d-flex justify-content-center mt-4">
                  <CardBtn item={productDetails} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default ProductDetailCompo;
