import { useContext } from 'react';
import { CardContext } from './CarCard';


export const CarDescription = () => {

  const { product, className } = useContext(CardContext);
  const { description } = product.car

  return (
    <p className={`carcard__data--desc ${className}__data--desc`}>
      {description.slice(0, description.length/3)}...
    </p>
  )
}
