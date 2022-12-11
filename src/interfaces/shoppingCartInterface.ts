import { Car } from "./carsInterface";

export interface InitialStateInterface{
    products: Product[],
    carModelsInCart: number
} 

export interface Product {
    car: Car;
    quantityInCart: number
}


