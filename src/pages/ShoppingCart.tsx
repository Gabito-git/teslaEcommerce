import Button from "../components/Button"
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/shoppingCartContext';
import useShoppingCart from '../hooks/useShoppingCart';
import ProductsInCart from "../components/ShoppingCart/ProductsInCart";
import { Link } from "react-router-dom";


const ShoppingCart = () => {
  
  const {state:{products}} = useContext( ShoppingCartContext );

  const {
    onChangeQuantityInCart, subtotal,
     total, tax, shipping, isThereProductsInCart
  } = useShoppingCart()


  return (
    <div className="container cart">
        <h2 className="cart__title">Cart</h2>
        
        <div className="cart__flex">

          <div className="cart__products-field">
            <ProductsInCart 
              onChange={ onChangeQuantityInCart }
              products={ products }
            />
          </div>

          <div className="cart__data">
              <h3 className="cart__data--title">Order summary</h3>

              <div className="cart__data--field">
                <p>Subtotal</p>
                <p>${ subtotal }</p>
              </div>

              <div className="cart__data--field">
                <p>Shipping estimate</p>
                <p>${ shipping }</p>
              </div>

              <div className="cart__data--field">
                <p>Tax estimate</p>
                <p>${ tax }</p>
              </div>

              <div className="cart__data--field" style={{color: 'black', fontSize: '1.6rem'}}>
                <p>Order total</p>
                <p>${ total }</p>
              </div>

              <Link to="checkout">
                <Button 
                  disabled={ !isThereProductsInCart }
                  title="Checkout"
                />
              </Link>
              
          </div>

        </div>
    </div>
  )
}

export default ShoppingCart