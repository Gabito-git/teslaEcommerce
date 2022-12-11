import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import Header from "../components/Header";
import CarDetail from "../pages/CarDetail";
import Checkout from "../pages/Checkout";

import Homepage from "../pages/Homepage";
import Order from "../pages/Order";
import Register from "../pages/Register";
import ShoppingCart from "../pages/ShoppingCart";
import Signin from '../pages/Signin';


const AppRouter = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Homepage />} />
                <Route path="car/:carId" element={<CarDetail />}/>
                <Route path="cart" element={<ShoppingCart />} />
                <Route path="cart/checkout" element={<Checkout />} />
                <Route path="cart/order" element={< Order/>}/>

                {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
                {/* <Route path="*" element={<NoMatch />} /> */}
            </Route>
            <Route path="/auth/login" element={<Signin />}/>
            <Route path="/auth/register" element={<Register />}/>
            <Route path="*" element={<Navigate to='/' />} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter