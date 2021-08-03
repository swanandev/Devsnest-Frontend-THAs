import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductDetails from "./screens/ProductDetails";
import ProductList from "./screens/ProductList";
import Wishlist from "./screens/Wishlist";

const App = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-200">
      <Router>
        <Navbar />
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
