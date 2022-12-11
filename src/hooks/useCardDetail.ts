import cars from '../cars';
import { Car } from '../interfaces/carsInterface';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/shoppingCartContext';

const useCardDetail = () => {

  const { carId } = useParams();
  const { dispatch } = useContext( ShoppingCartContext );

  const car: Car = cars.find( car => car.id === +carId !)!
  const { quantity, highlights}: Car = car;

  const stock = quantity >= 1;

  const onAddToCart = () => {
    dispatch({
      type:'ADD_PRODUCT', 
      payload:{ car }
    })
  }

  return{
    ...car,
    stock,
    highlights,
    
    onAddToCart
  }
}

export default useCardDetail;