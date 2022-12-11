import { useContext } from "react";
import { GrFormClose } from "react-icons/gr"
import { ShoppingCartContext } from "../../context/shoppingCartContext";
import { CardContext } from "./CarCard";


export const CarCardClose = () => {

  const { dispatch } = useContext( ShoppingCartContext );
  const { product: { car } } = useContext( CardContext );

  const onDeleteProductInCart = () => {
    dispatch({
      type: 'DELETE_PRODUCT',
      payload:{ id: car.id }
    })
  }

  return (
    <div className='carcard__close'>
        <GrFormClose
            onClick={ onDeleteProductInCart }
        />
    </div>
  )
}

export default CarCardClose