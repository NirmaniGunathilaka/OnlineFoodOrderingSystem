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

export default function Pizza() {
    const classes = useStyles();
    return (
        <Grid
            container
            spacing={4}
            className={classes.gridContainer}
            justify="center"
        >
            <Grid item xs={12} sm={6} md={4} item style={{ display: 'flex' }}>
                <Card sx={{ maxWidth: 345 }} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/pizza_shrimp.jpg"
                        alt="pizza"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Creole Shrimp
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pizza is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button align="center" size="small">Order</Button>

                    </CardActions>
                </Card>

            </Grid>
            <Grid item xs={12} sm={6} md={4} item style={{ display: 'flex' }}>
                <Card sx={{ maxWidth: 345 }} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/pizza_hawaiian.jpg"
                        alt="hawaiin_pizza"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Hawaiian
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pizza is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button align="center" size="small">Order</Button>

                    </CardActions>
                </Card>

            </Grid>
            <Grid item xs={12} sm={6} md={4} item style={{ display: 'flex' }}>
                <Card sx={{ maxWidth: 345 }} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/pizza_mushroom.jpg"
                        alt="pizza"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Vegie Supreme
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pizza is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button align="center" size="small">Order</Button>

                    </CardActions>
                </Card>

            </Grid>
            <Grid item xs={12} sm={6} md={4} item style={{ display: 'flex' }}>
                <Card sx={{ maxWidth: 345 }} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/pizza_pepperoni.jpg"
                        alt="pizza"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Pepperoni
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pizza is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button align="center" size="small">Order</Button>

                    </CardActions>
                </Card>

            </Grid>
            <Grid item xs={12} sm={6} md={4} item style={{ display: 'flex' }}>
                <Card sx={{ maxWidth: 345 }} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/pizza_bbq.jpg"
                        alt="pizza"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           BBQ Chicken
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pizza is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button align="center" size="small">Order</Button>

                    </CardActions>
                </Card>

            </Grid>
            <Grid item xs={12} sm={6} md={4} item style={{ display: 'flex' }}>
                <Card sx={{ maxWidth: 345 }} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/pizza_cheese.jpg"
                        alt="pizza"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Cheese Lovers
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pizza is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button align="center" size="small">Order</Button>

                    </CardActions>
                </Card>

            </Grid>
        </Grid>
    );
}