import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Switch, Route, Link, useParams } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = React.useState([
        {
            id: 1,
            image:
                "https://lp2.hm.com/hmgoepprod?set=source[/1b/7a/1b7aa9a9ba44ffc2221bdbba17134fe3c0a9e0be.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
            title: "Bluza z kapturem Relaxed Fit",
        },
        {
            id: 2,
            image:
                "https://lp2.hm.com/hmgoepprod?set=source[/5e/90/5e90db8dfffe1a2b023908fa6270fa85b0e53d86.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]",
            title: "T-shirt Slim Fit 5-pak",
        },
        {
            id: 3,
            image:
                "https://lp2.hm.com/hmgoepprod?set=source[/a9/5f/a95ff9affce0818feba6ef91ffa9118ff484ab25.jpg],origin[dam],category[men_underwearloungewear_underwear],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]",
            title: "Krótkie bokserki 5-pak",
        },
    ]);
    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid item xs={6} sm={4} md={3}>
                        <Link to={`/products/${product.id}`}>
                            <Paper
                                style={{
                                    width: "100%",
                                    position: "relative",
                                    paddingTop: "143%",
                                    textDecoration: "none",
                                    overflow: "hidden",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundImage: `url(${product.image})`,
                                }}
                            ></Paper>
                        </Link>
                        <Typography>{product.title}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
