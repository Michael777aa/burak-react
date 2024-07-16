import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Product";
import "../../../css/products.css";
export default function ProductsPage() {
  const products = useRouteMatch();
  return (
    <div className={"products-page"}>
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChosenProduct />
        </Route>
        <Route path={`${products.path}`}>
          <ChosenProduct></ChosenProduct>
          <Products />
        </Route>
      </Switch>
    </div>
  );
}
