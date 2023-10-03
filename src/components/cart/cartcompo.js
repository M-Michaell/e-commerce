import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Counter from "./counterbtn";
import Remove from "./remove";

export default function Cartcompo() {
  const cart = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const redirectToList = () => {
    navigate(`/`);
  };
  let totalPrice = 0;

  const cartPrices = cart.map((item) =>
    Math.round(
      item.price * item.quantity * ((100 - item.discountPercentage) / 100)
    )
  );
  cartPrices.forEach((itemPrice) => {
    totalPrice += itemPrice;
  });

  // console.log(totalPrice);

  return (
    <div className="containers text-center">
      <h3 className="mt-5">Cart</h3>
      <hr className="mt-3" />
      <table className="col-12 fs-auto">
        <thead>
          <tr className=" mb-5">
            <th className="me-2" colSpan={1}>
              Description
            </th>
            <th>Quantity</th>
            <th>Remove</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody className="table-group-divider my-3 text-center ">
          {cart.map((item, index) => (
            <tr className="border" key={index}>
              <td style={{ width: "60%" }}>
                <div className="card mb-3 w-75 d-flex align-items-center border-0">
                  <div className="row g-0">
                    <div className="col-md-4 align-self-center wrap h-100 ">
                      <img
                        src={item.images[0]}
                        className="img-fluid rounded-start m-3"
                        alt="{1}"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body ">
                        <Link
                          to={`/product-details/${item.id}`}
                          className="text-decoration-none text-success "
                        >
                          <h5 className="card-title text-start ms-4 fs-3 text-decoration-none">
                            {item.title}
                          </h5>
                        </Link>

                        <p className="card-text fs-6 text-truncate mt-5 ms-3">
                          {item.description}
                        </p>
                        <p className="card-text"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <Counter product={item} />
                </div>
              </td>
              <td>
                <div>
                  <Remove product={item} />
                </div>
              </td>
              <td className="fs-5 p-3">
                {Math.round(
                  item.price *
                    item.quantity *
                    ((100 - item.discountPercentage) / 100)
                )}
                $
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>

            <td className=" fs-4 p-3 border ">Total Price</td>
            <td colSpan={2} className=" fs-4 p-3 border mb-2">
              {totalPrice} $
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="d-flex  w-50 justify-content-evenly mx-auto my-5 ">
        <button className="btn btn-outline-success fs-4"> Go to payment</button>
        <button
          className="btn btn-outline-success fs-4 "
          onClick={redirectToList}
        >
          continue shopping
        </button>
      </div>
    </div>
  );
}
