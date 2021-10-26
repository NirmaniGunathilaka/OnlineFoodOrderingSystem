import React from "react";
import Sidebar from "./sidebar";
import Deals from "./Deals";
import FoodItems from "./FoodItems";
import Cart from "./Cart";

import Dashboard from "@material-ui/icons/Dashboard";
import FoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Redirect } from "react-router-dom";
import sidebarImage from "../assets/img/f1.jpg";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Food Items",
    icon: FoodIcon,
    component: FoodItems,
    layout: "/customer",
  },
  {
    path: "/deals",
    name: "Deals",
    icon: Dashboard,
    component: Deals,
    layout: "/customer",
  },
  {
    path: "/cart",
    name: "View Cart",
    icon: ShoppingCartIcon,
    component: Cart,
    layout: "/customer",
  },
];

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.layout === "/customer") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/customer" to="/customer/dashboard" />
  </Switch>
);

const styles = {
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)",
  },
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "30px",
    marginLeft: "300px",
  },
  map: {
    marginTop: "70px",
  },
};

const useStyles = makeStyles(styles);

function Customer(...rest) {
  const classes = useStyles();
  const [color, setColor] = React.useState("blue");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/customer/maps";
  };

  return (
    <div>
      <Sidebar
        routes={dashboardRoutes}
        sidebarImage={sidebarImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      {getRoute() ? (
        <div className={classes.content}>
          <div className={classes.container}>{switchRoutes}</div>
        </div>
      ) : (
        <div className={classes.map}>{switchRoutes}</div>
      )}
    </div>
  );
}
export default Customer;
