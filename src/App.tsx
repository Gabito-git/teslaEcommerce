
import { AuthContextProvider } from "./context/AuthContext";
import { ShoppingCartContextProvider } from "./context/shoppingCartContext";
import AppRouter from "./router/AppRouter";


function App() {
  return (
    <AuthContextProvider>
      <ShoppingCartContextProvider>
        <AppRouterĀ />
      </ShoppingCartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
