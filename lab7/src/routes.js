import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";

export default [
    {
        path: "/",
        component: Home,
        title: "Strona Główna",
        icon: HomeIcon,
    },
    {
        path: "/products",
        component: Products,
        title: "Produkty",
        icon: ListIcon,
        routes: [
            {
                path: "/products/:id",
                component: ProductDetails,
            },
        ],
    },
];
