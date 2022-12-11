import { useState } from "react";
import { useLocation } from 'react-router-dom';

type StateContext = {
    [key: string]: HTMLElement | null
  }

const useHeader = () => {

  const [refs, setRefs] = useState<StateContext>({
      Model3: null,
      ModelY: null,
      ModelX: null,
      ModelS: null
    })

  const { pathname} = useLocation();
  const isInHome = pathname === '/';
  const isInCart = pathname.includes('/cart');

  const style = {
    backgroundColor: (!isInHome ? 'white': 'transparent'),
    borderBottom: (isInCart ? '1px solid #e6e6e6': 'none')
  }
    
    const setearReferencias = (ref: HTMLElement| null, carName: string) => {
      setRefs(refs => ({
        ...refs,
        [carName]: ref
      }));
    }
  
    const scrollTo = (ref: HTMLElement| null) => {
      ref!.scrollIntoView({behavior: 'smooth'});
    }

    return{
      refs,
      isInCart,
      isInHome,
      style,
      
      setearReferencias,
      scrollTo
    }

}

export default useHeader;