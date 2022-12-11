import { useContext } from "react";
import { CardContext } from "./CarCard";


export const CardCardSelect = () => {

  const { onChange, product } = useContext( CardContext );
  const { id } = product.car;
  const options = [1, 2, 3, 4, 5, 6, 7, 8];

  const onChangeValue = 
  (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onChange(id, +value);
  }

  return (
    <div className='carcard__select'>
    <select onChange={ onChangeValue }>
      <option value={ product.quantityInCart } >
        { product.quantityInCart }
      </option>
      {options.map((option, index) => {
        return <option key={index} >
          {option}
        </option>
      })}
    </select>
  </div>
  )
}

export default CardCardSelect