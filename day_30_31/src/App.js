import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Backdrop from "./components/Backdrop";
import CartDrawer from "./components/CartDrawer";

import Navbar from "./components/Navbar";
import ProductDetails from "./screens/ProductDetails";
import ProductList from "./screens/ProductList";
import Wishlist from "./screens/Wishlist";
import { toggleDrawer } from "./store/slices/CartSlice";

const App = () => {
  const { isDrawerVisible } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleDrawer = () => {
    dispatch(toggleDrawer());
  };
  //console.log(isDrawerVisible);
  return (
    <div className="h-screen relative z-10 flex overflow-x-hidden flex-col items-center bg-gray-200">
      <Router>
        <Navbar openCart={handleDrawer} />
        <CartDrawer visibility={isDrawerVisible} closeCart={handleDrawer} />
        <Backdrop closeCart={handleDrawer} visibility={isDrawerVisible} />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/wishlist" component={Wishlist} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
