import React from "react";
import { Switch, Route, Link, useParams } from "react-router-dom";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";

export default function App() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setOpen(open);
    };
    return (
        <React.Fragment>
            <AppBar handleMenuClick={toggleDrawer(true)} />
            <Drawer open={open} handleClose={toggleDrawer(false)} />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/products/:id">
                    <ProductDetails />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </React.Fragment>
    );
}
