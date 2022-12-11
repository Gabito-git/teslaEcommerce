
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/shoppingCartContext';
import useShoppingCart from '../hooks/useShoppingCart';
import Confetti from 'react-confetti'
import RenderProducts from '../components/Order/RenderProducts';


const Order = () => {

  const { state:{  products } } = useContext(ShoppingCartContext);
  const { total, totalProductsInCart } = useShoppingCart();

  return (
    <div className="order">

      <Confetti
        tweenDuration={2000}
      />
      
      <div className="order__top">
        <h2>Order Placed!</h2>
        <p>Check the status of recent orders, manage returns, and discover similar products.</p>
      </div>

      <div className="order__bottom">
        <div className="order__data">
          <div>
            <p className="order__top-text-line">Order number</p>
            <p>$ { total }</p>
          </div>
          <div>
            <p className="order__top-text-line">Total amnount</p>
            <p>{ totalProductsInCart }</p>
          </div>
        </div>
      </div>

      <div className="order__products">
        <RenderProducts products={products} />
      </div>
    </div>
    
  )
}

export default Order