import { Link, Outlet, useOutletContext } from "react-router-dom"
import { FaOpencart } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import useHeader from "../hooks/useHeader";
import cars from "../cars";
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/shoppingCartContext';
import { AuthContext } from '../context/AuthContext';
import useAuth from "../hooks/useAuth";

type RouterContextType = { 
  setearReferencias: (ref:(HTMLElement| null), carName: string) => void
 };

const Header = () => {

  const { state:{ carModelsInCart } } = useContext(ShoppingCartContext);
  const { state:{ uuid } } = useContext( AuthContext );
  const { onSignout } = useAuth()

  const { 
     isInHome, style,
    scrollTo,setearReferencias, refs
  } = useHeader()

  const renderLis = () => {
    return(
      cars.map(({title, id}, index) => {
        const titleTrimSpaces = title.replace(/\s+/g, '');
        return isInHome
          ? (<li 
              onClick={ () => scrollTo(refs[titleTrimSpaces]) }
              key={ index }
              >{ title }</li>
            )

          : (<Link 
              key={ index }
              to={`/car/${ id }`}
              >{ title }</Link>)
      })
    )
  }

  return (
    <>
      <div 
        className="header" 
        style={ style }
      >
        <Link to="/">
          <img 
            src="/assets/logo.svg" 
            className="header__logo"
            alt="logo"
          />
        </Link>
        <input type="checkbox" />
        <nav className="header__nav">
          <div className="header__nav--close">
            <IoCloseSharp style={{fontSize: '2.5rem'}} />
          </div>
          <ul>
            {renderLis()}
          </ul>
        </nav>
        
        <div className="header__right">
          {
            uuid
            ?(
              <p
                onClick={ onSignout }
              >Sign out</p>
            )
            :(
              <Link to="/auth/login">
                <p>{ uuid ? 'Sign out': 'Sign in' }</p>
              </Link>
            )
          }
        
          <div className="header__right--counter">{ carModelsInCart }</div>
          <Link to="/cart">
            <FaOpencart style={{ fontSize: '3rem' }}/>
          </Link>

          <div className={ `header__right--user ${ !uuid && 'opacity-0' }`}>
            <p>G</p>
          </div>
         
          <GiHamburgerMenu  className="header__right--ham" />
        </div>
      </div>
      
      <Outlet context={{setearReferencias}}/>
    </>
  )
}

export default Header

export function useReferences() {
  return useOutletContext<RouterContextType>();
}