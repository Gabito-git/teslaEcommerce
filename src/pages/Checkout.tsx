import { Form, Formik } from "formik";
import * as Yup from 'yup';
import Button from "../components/Button";
import { TextInput } from "../components/Form/TextInput";
import { CarCard } from "../components/CarCard";
import useShoppingCart from "../hooks/useShoppingCart";
import { Link } from "react-router-dom";


const Checkout = () => {

  const {total, isThereProductsInCart, products} = useShoppingCart();

  const renderProductsInCart = () => {
    return(
      products.map( product => (
        <CarCard 
          className="checkout__carcard"
          product={ product }
          key={ product.car.id }
        >
          <CarCard.Description />
        </CarCard>
      ))
    )
  }

  return (
    <div className="checkout">
      <div className="checkout__lateral">
        <div className="checkout__products-cart">
         { renderProductsInCart() }
        </div>
        <div className="checkout__text">
          <div className="checkout__yourorder">
            <h2>Your Order</h2>
          </div>
          <div className="checkout__total">
            <p>Total</p>
            <p>${ total }</p>
          </div>
        </div>
      </div>

      <div className="checkout__form">
        <Formik
          initialValues={{
            email: '',
            name: '',
            cardNumber: '',
            expiration: '',
            cvc:'',
            address: '',
            city:'',
            state:'',
            postal:'',
            check: false 
          }}
          onSubmit = {console.log}
          validationSchema={
            Yup.object({
              // Set some validations
            })
          }
        >
          {
            () => (
              <Form>
                <div className="checkout__form-content">
                  <TextInput 
                    label="Email address" 
                    name="email"
                    className="checkout__text-input"
                    type = 'email'
                  />

                  <TextInput 
                    label="Name on card" 
                    name="name"
                    className="checkout__text-input"
                  />

                  <TextInput 
                    label="Card number" 
                    name="cardNumber"
                    className="checkout__text-input"
                  />

                  <div className="checkout__field-1">
                      <TextInput 
                        label="Expiration date (MM/YY)"
                        name="expiration"
                        className="checkout__text-input"
                      />
                      <TextInput 
                        label="CVC"
                        name="cvc"
                        className="checkout__text-input"
                      />
                  </div>

                  <TextInput 
                      label="Address"
                      name="address"
                      className="checkout__text-input"
                    />

                  <div className="checkout__field-2">
                    <TextInput 
                      label="City"
                      name="city"
                      className="checkout__text-input"
                    />
                    <TextInput 
                      label="State / Province"
                      name="state"
                      className="checkout__text-input"
                    />
                    <TextInput 
                      label="Postal code"
                      name="post"
                      className="checkout__text-input"
                    />

                  </div>
                    <div className="checkout__checkbox-field">
                      <input type="checkbox"/>
                      <label>Billing address is the same as shipping address</label>
                    </div>

                    <Link to="../cart/order">
                      <Button 
                        disabled={!isThereProductsInCart }
                        title={ `Pay $${ total }` } 
                        className="checkout__button"
                      />
                    </Link>
               </div>
                 
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}

export default Checkout