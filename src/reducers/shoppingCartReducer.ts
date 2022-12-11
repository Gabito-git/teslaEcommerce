
import { Car } from '../interfaces/carsInterface';
import { InitialStateInterface } from '../interfaces/shoppingCartInterface';

export type Action = 
| {type: 'ADD_PRODUCT', payload:{car: Car}}
| {type: 'SET_PRODUCT_QUANTITY', payload: {id: number, quantity: number}}
| {type: 'DELETE_PRODUCT', payload: {id: number}}

export const shoppingCartReducer= (state: InitialStateInterface, action: Action) => {

    switch (action.type) {
        case 'ADD_PRODUCT':
            const { car } = action.payload;
            if( state.products.find( 
                ( product ) => product.car.id === car.id ) ) return state;
            return{
             ...state,
             products: [ 
                ...state.products, 
                {car, quantityInCart: 1 } 
            ],
             carModelsInCart: state.carModelsInCart + 1
            }

        case 'SET_PRODUCT_QUANTITY':
            const { payload:{ id, quantity } } = action;
   
            return{
                ...state,
                products: state.products.map( product => {
                    if(product.car.id === id){
                        product.quantityInCart = quantity
                    }

                    return product
                })
            }

        case 'DELETE_PRODUCT':
            const newProducts = state.products.filter( ({car}) => car.id !== action.payload.id )
            return{
                ...state,
                products: newProducts,
                carModelsInCart: state.carModelsInCart - 1
            }
    
        default:
            return state;
    }
}