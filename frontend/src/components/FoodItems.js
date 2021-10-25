// import React from "react";
// import { Box, Typography } from "@mui/material";

// export default function FoodItems() {
//     return (
//     <Box mt={5}>
//         <Typography variant="h5">Food Items Here!</Typography>
//     </Box>
//     );
// }
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import "../styles.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px"
    }
});

export default function FoodItems() {
    const classes = useStyles();
    return (
        <Grid
            container
            spacing={4}
            className={classes.gridContainer}
            justify="center"
        >
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/pizza.jpg"
                        alt="pizza"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pizza
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pizza is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button align="center" size="small">Add to cart</Button>

                    </CardActions>
                </Card>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/pizza.jpg"
                        alt="pizza"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button align="center" size="small">Add to cart</Button>

                    </CardActions>
                </Card>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/pizza.jpg"
                        alt="pizza"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button align="center" size="small">Add to cart</Button>

                    </CardActions>
                </Card>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/pizza.jpg"
                        alt="pizza"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button align="center" size="small">Add to cart</Button>

                    </CardActions>
                </Card>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/pizza.jpg"
                        alt="pizza"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button align="center" size="small">Add to cart</Button>

                    </CardActions>
                </Card>

            </Grid>

        </Grid>

    );
}
