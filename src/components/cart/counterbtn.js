import { useSelector, useDispatch } from "react-redux";
import { decreaceQuantity, increaseQuantity } from "../store/Slices/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./counter.css";

export default function Counter(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);

  const exsisting = cart.find((item) => item.id === product.id);
  // console.log(exsisting);

  // console.log(cart);
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex w-150 justify-content-evenly border counter">
          <button
            className="btn btn-outline-success round-pill"
            onClick={() => dispatch(increaseQuantity(product))}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>


          <h3 className="mx-3">{exsisting.quantity}</h3>


          <button
            className="btn btn-outline-danger  round-pill"
            onClick={() => dispatch(decreaceQuantity(product))}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <div></div>
      </div>
    </>
  );
}

//
//                    <Counter product={productDetails} />
