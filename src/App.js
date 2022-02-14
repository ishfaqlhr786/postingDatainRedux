

import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import {ProductList} from "./containers/ProductList";
import Product from "./containers/Product";
//import Post from './containers/Post'
//import Pokemon from "./containers/Pokemon";
function App() {
  return (
    <div className="App">
      
     
      <Switch>
        <Route exact path={"/"} component={ProductList} />
        <Route exact path={"/Product/:product"} component={Product} />
        
      
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;



