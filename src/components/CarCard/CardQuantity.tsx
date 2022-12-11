import { useContext } from 'react';
import { CardContext } from './CarCard';


export const CardQuantity = () => {

  const { product:{ quantityInCart }, className } = useContext(CardContext);

  return (
    <div className={`${ className }__quantity`}>
      <p>Quantity: { quantityInCart }</p>
    </div>
  )
}
