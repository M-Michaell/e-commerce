import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeFromCart } from "../store/Slices/cart";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

export default function Remove(props) {
  const { product } = props;
  const dispatchEvent = useDispatch();
  return (
    <button
      className="btn btn-outline-danger round-pill"
      onClick={() => dispatchEvent(removeFromCart(product))}
    >
      <FontAwesomeIcon icon={faX} />
    </button>
  );
}
