import React, { useEffect, useState } from "react";
import Productcard from "./productcard";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../apis/config";

function Productcompo() {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  const redirectToDetails = (id) => {
    navigate(`/product-details/${id}`);
  };

  useEffect(() => {
    axiosInstance
      .get("")
      .then((res) => setProductList(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return productList ? (
    <>
      <h2 className="mt-5">Our new list of Products</h2>
      <hr className="my-5"></hr>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productList.map((product, index) => {
          return (
            <div className="col" key={index}>
              <Productcard
                productdata={product}
                handleNavigate={(id) => redirectToDetails(id)}
              />
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <></>
  );
}

export default Productcompo;
