import { ImSad } from "react-icons/im";
import { Link } from "react-router-dom";
import Button from "./Button";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
        <p><span>Cart is Empty!</span> <ImSad /></p>
        <div className="empty-cart__button-container">
          <Link to="/">
            <Button title="Shop Now!" />
          </Link>
        </div>
    </div>
  )
}

export default EmptyCart