import { Provider } from "react-redux";
import store from "../redux/store";

import ProductsPage from "../pages/ProductsPage";
import classes from "./App.module.scss";

function App() {
  return (
    <Provider store={store}>

      <div className={classes.App}>

        <ProductsPage />

      </div>
    </Provider>
  );
}

export default App;
