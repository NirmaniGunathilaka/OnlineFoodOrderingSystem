import React from 'react';
import "../styles.css";
import Card from "./Card";
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
            <Grid item xs={12} sm={6} md={4}>
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card />
            </Grid>
        </Grid>
    )
}