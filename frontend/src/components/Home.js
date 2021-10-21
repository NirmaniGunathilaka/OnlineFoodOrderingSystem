import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Carousel from "./CarouselSlider";
import { createTheme } from "@material-ui/core/styles";
// import { createBrowserHistory as history } from 'history';
import history from "./history";


const theme = createTheme({
    palette: {
        primary: {
            main: "#feb236", // This is an orange looking color
        },
        secondary: {
            main: "#ffcc80", //Another orange-ish color
        },
    },
    fontFamily: "font", // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
});

export default function ButtonAppBar() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar theme={theme} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            Foodie Hub
                        </Typography>
                        <Button size="large" color="inherit" onClick={() => history.push("/signinsignup")}>
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Carousel />
        </div>
    );
}
