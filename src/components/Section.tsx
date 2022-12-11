import { Car } from '../interfaces/carsInterface';
import { useReferences } from './Header';
import { useEffect, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

interface Props{
  car: Car,
  isLastSection: boolean
}

const Section = ({ car, isLastSection }: Props) => {

  const { setearReferencias } = useReferences();
  const ref = useRef<HTMLElement | null>(null);
  const { title, backgroundImg, id } = car;

  useEffect(() => {
    const carNameWithoutSpaces = title.replace(/\s+/g, '')
    setearReferencias(ref.current, carNameWithoutSpaces);
  }, [ title])
  
  return (
    <section 
        className="section"
        ref={ref}
        style={{ backgroundImage: `url(./assets/images/${ backgroundImg })` }}
    >
        <div className="section__text animate__animated animate__fadeInUp">
            <h2 className="section__title">
              { title }
            </h2>
            <p className="section__subtitle">
              Order Online For Touchless Delivery
            </p>
        </div>

        <div style={{ textAlign:'center' }}>
          <div className="section__buttons animate__animated animate__fadeInUp">
            <Link to={`/car/${ id }`}>
              <button className="section__button section__button--left">
                CUSTOM ORDER
              </button>
            </Link>
            <button className="section__button section__button--right">
              EXISTING INVENTORY
            </button>
          </div>
          <IoIosArrowDown 
            className='section__arrow-down'
            style={ isLastSection ? { display: 'none' }: {}}
          />
        </div>
    </section>
  )
}

export default Section