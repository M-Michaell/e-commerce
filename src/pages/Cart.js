import React from "react";
import Cartcompo from "../components/cart/cartcompo";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart.cartItems);
  const navigate=useNavigate()
  const goShopping=()=>{
    navigate("/")
  }
  return cart.length !== 0 ? (
    <div>
      <Cartcompo />
    </div>
  ) : (
    <div className="d-flex justify-content-center flex-column text-center position-absolute top-50 start-50 translate-middle">
      <div>
        <FontAwesomeIcon
          icon={faHeartCrack}
          style={{ color: "#c9c9c9", fontSize: "200px" }}
          className="text-center m-3 "
        />
      </div>
      <div>
        <h3>Your Cart is empty</h3>
      </div>
      <button className="btn btn-outline-success m-3"
      onClick={goShopping}>Go shopping</button>
    </div>
  );
}

export default Cart;
