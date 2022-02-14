import { combineReducers } from "redux";
import GetProductReducer from "./GetProductReducer";
import ProductListReducer from "./ProductListReducer";
//import PokemonMultipleReducer from "./PokemonMultipleReducer";
const rootReducer = combineReducers({
  ProductList: ProductListReducer,
  Product:GetProductReducer,
  
});
export default rootReducer;
