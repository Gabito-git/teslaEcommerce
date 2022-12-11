
import { createContext, ReactElement, useReducer } from "react";
import { InitialStateInterface } from '../interfaces/shoppingCartInterface';
import { Action, shoppingCartReducer } from '../reducers/shoppingCartReducer';


const initialState: InitialStateInterface ={
    products: [],
    carModelsInCart: 0
}


export const ShoppingCartContext = createContext<{
    state: InitialStateInterface;
    dispatch: React.Dispatch<Action>;
  }>({
    state: initialState,
    dispatch: () => null
  });


export const ShoppingCartContextProvider = ({ children }:{children:ReactElement}) => {

    const [state, dispatch] = useReducer(shoppingCartReducer, initialState);

    return(
        <ShoppingCartContext.Provider value={ {state, dispatch} }>
            { children }
        </ShoppingCartContext.Provider>
    )

}