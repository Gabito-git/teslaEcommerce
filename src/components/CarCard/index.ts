import CarCardHOC from "./CarCard";
import CarCardClose from './CarCardClose';
import CardCardSelect from './CardCardSelect';
import { CarDescription } from "./CarDescription";
import { CardQuantity } from "./CardQuantity";

export { CarCardClose } from './CarCardClose';
export { CardCardSelect } from './CardCardSelect';
export { CarDescription } from "./CarDescription";
export { CardQuantity } from "./CardQuantity";


export const CarCard = Object.assign( CarCardHOC, {
    Close: CarCardClose,
    Select: CardCardSelect,
    Description: CarDescription,
    Quantity: CardQuantity
} )