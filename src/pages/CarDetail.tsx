
import { 
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter } from "react-icons/ai";
import Button from "../components/Button";
import useCardDetail from "../hooks/useCardDetail";

import { Highlights, Stars, Stock } from "../components/CardDetail";

const CarDetail = () => {

  const {
    onAddToCart,stock, highlights,
    backgroundImg, title, description, price, 
  } = useCardDetail();
  
  return (
    <div className="container car-detail">
      <div className="car-detail__image-container">
        <img
          src={`/assets/images/${backgroundImg}`}
          alt="tesla"
        />
      </div>

      <div className="car-detail__detail-field">
        <div className="car-detail__title-field">
          <h2>{ title }</h2>
          <Stars />
        </div>

        <p className="car-detail__description">{ description }</p>
        <p className="car-detail__price">Price - ${ price }</p>
        <div><Stock stock={ stock } /></div>

        <div className="car-detail__button-container">
          <Button 
            title="Add to cart"
            disabled={ !stock }
            onClick={ onAddToCart }
          />
        </div>

        <div className="car-detail__highlights">
          <h3>Highlights</h3>
          <Highlights highlights={ highlights } />
        </div>

        <div className="car-detail__social">
          <p>Share</p>

          <AiFillFacebook className="car-detail__social-icon"/>
          <AiOutlineInstagram className="car-detail__social-icon"/>
          <AiOutlineTwitter className="car-detail__social-icon"/>

        </div>
      </div>
    </div>

  )
}

export default CarDetail