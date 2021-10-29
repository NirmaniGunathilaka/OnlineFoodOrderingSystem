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
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import "../styles.css";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Popup from "./Popup";
import ItemForm from "./ItemForm";


import history from "./history";

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px"
    }
});

export default function FoodItems() {
    const [openPopup, setOpenPopup] = useState(false)
    const [recordForEdit, setRecordForEdit] = useState(null)
    const classes = useStyles();
    return (
        <Grid>
            <Box m={2} pb={3}>
                <Button variant="contained" style={{ backgroundColor: '#f58311' }} onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}>Add New Item</Button>

            </Box>
            <Popup
                title="Employee Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}>
                    <ItemForm/>
            </Popup>
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
                            image="/images/Piz.jpg"
                            alt="pizza"
                        />
                        <CardContent sx={{ flexGrow: 2 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Pizza
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Pizza is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center' }}>
                            <Button onClick={() => history.push("/pizza")} align="center" size="small">View Catalog</Button>

                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={6} md={4} item style={{ display: 'flex' }}>
                    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column' }} >
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/pasta.jpg"
                            alt="Pasta"
                        />
                        <CardContent sx={{ flexGrow: 2 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Pasta
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Simple, classic pasta recipes are always a crowd pleaser and naturally budget friendly
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center' }}>
                            <Button align="center" size="small">View Catalog</Button>

                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={6} md={4} item style={{ display: 'flex' }}>
                    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/burger.jpg"
                            alt="Burger"
                        />
                        <CardContent sx={{ flexGrow: 2 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Burger
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A hamburger is a food, typically considered a sandwich, consisting of one or more cooked patties
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center' }}>
                            <Button align="center" size="small">View catalog</Button>

                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={6} md={4} item style={{ display: 'flex' }}>
                    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/submarine.jpg"
                            alt="submarine"
                        />
                        <CardContent sx={{ flexGrow: 2 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Submarine
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A submarine sandwich, commonly known as a sub, hoagie, hero, Italian sandwich or grinder, is a type of cold or hot sandwich made from a cylindrical bread roll split lengthwise and filled with meats, cheeses, vegetables, and condiments
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center' }}>
                            <Button align="center" size="small">view catalog</Button>

                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={6} md={4} item style={{ display: 'flex' }}>
                    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/noodles.jpg"
                            alt="noodles"
                        />
                        <CardContent sx={{ flexGrow: 2 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Noodles
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center' }}>
                            <Button align="center" size="small">view catalog</Button>

                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={6} md={4} item style={{ display: 'flex' }}>

                    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/rice.jpg"
                            alt="rice"
                        />
                        <CardContent sx={{ flexGrow: 2 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Rice
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center' }} >
                            <Button align="center" size="small">view catalog</Button>

                        </CardActions>
                    </Card>


                </Grid >
            </Grid>
        </Grid >

    );
}
