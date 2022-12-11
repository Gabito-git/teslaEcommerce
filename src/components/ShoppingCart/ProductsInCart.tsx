import { useContext } from "react";
import { ShoppingCartContext } from "../../context/shoppingCartContext";
import { Product } from "../../interfaces/shoppingCartInterface";
import { CarCard } from "../CarCard"
import EmptyCart from "../EmptyCart";

interface Props{
  onChange?: (id: number, quantity: number) => void;
  products: Product[]
}

const ProductsInCart = ({ onChange, products }: Props) => {

  return (
    <>
      {products.length > 0
        ?(
          products.map( product =>(
            <CarCard
              product={ product }
              key={ product.car.id }
              onChange={ onChange }
              className="cart__product-item"
            >
              <CarCard.Close />
              <CarCard.Select />
              <CarCard.Description />
            </CarCard>
          ))
        )
        :(
          <EmptyCart />
        )}
    </>
  )
}

export default ProductsInCart