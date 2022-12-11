import MediaQuery from 'react-responsive';
import { Product } from '../../interfaces/shoppingCartInterface';
import { CarCard } from '../CarCard';

const RenderProducts = ({products}: { products:Product[] }) => {
  return (
    <>
      {
        products.map( product => (
          <CarCard
            className='order__product-item'
            key={ product.car.id }
            product={ product }
          > 
            <MediaQuery minWidth={ 576 }>
              <CarCard.Description />
            </MediaQuery>
            <CarCard.Quantity />
          </CarCard>
         ))
      }
    </>
  )
}

export default RenderProducts