import { useState, useEffect, useContext} from "react";
import { ShoppingCartContext } from "../context/shoppingCartContext";

interface InitStateInterface{
    subtotal: string;
    tax: number;
    shipping: number;
    total: string,
    totalProductsInCart: number
  }
  
  const initState: InitStateInterface= {
    subtotal: '0',
    tax: 0,
    shipping: 0,
    total: '0',
    totalProductsInCart: 0,
  }

const useShoppingCart = () => {

    const {state:{products}, dispatch} = useContext( ShoppingCartContext );

    const [values, setValues] = useState(initState)
  
    useEffect(() => {
      calculateValues();
    }, [ products ])

    const calculateValues = () => {
        if (products.length === 0){
          return setValues(initState)
        }
    
        const subtotal = products.reduce( 
          (acum, {quantityInCart, car}) => {
            const { price, } = car;
            return acum + ( price * quantityInCart);
          },0 
        )

        const totalProductsInCart = products.reduce( (acum, car) =>{
            return acum + car.quantityInCart
        }, 0)

        
        const formattedSubtotal = Intl.NumberFormat('en-US').format(subtotal)
        const tax = +(subtotal * 0.02).toFixed(2);
        const shipping = 500;
        const total = Intl.NumberFormat('en-US').format(subtotal + tax);
    
        setValues({
          subtotal: formattedSubtotal, total, 
          tax, shipping, totalProductsInCart
        })
     }
    
      const onChangeQuantityInCart = (
        id: number, quantity: number) => {
        dispatch(
          {
            type: 'SET_PRODUCT_QUANTITY',
            payload:{ id, quantity }
          }
        )
      }

      return{
        ...values,
        products,
        isThereProductsInCart : products.length > 0 ? true: false,

        onChangeQuantityInCart,
      }
    
    
}

export default useShoppingCart