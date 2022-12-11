
import {  createContext, ReactElement } from 'react';
import { Product } from '../../interfaces/shoppingCartInterface';


interface Props{
  product: Product
  onChange?: (id: number, quantity: number) => void;
  children?: ReactElement | ReactElement[];
  className?: string
}

interface CardContextInterface{
    onChange: (id: number, quantity: number)=> void;
    product: Product,
    className?: string
}

export const CardContext =  createContext({} as CardContextInterface);

const CarCard = ({ 
  product, 
  onChange = () => {}, 
  children,
  className
}: Props) => {

  const { Provider } = CardContext;
  
  const { title,  price, backgroundImg } = product.car;

  return (

    <Provider value={{ onChange, product, className }}>
        <div className={`carcard ${ className }`} >
            <div className={`carcard__img-field ${className}__img-field`}>
                <img src={`/assets/images/${backgroundImg}`} alt={title} />
            </div>
            <div className='carcard__data'>
                <h3>{ title }</h3>
                <p>Price - ${price}</p>
            </div>

            { children }

        </div>
    </Provider>
    
  )
}

export default CarCard