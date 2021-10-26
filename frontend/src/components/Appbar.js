import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import history from "./history";
import { createTheme } from "@material-ui/core/styles";


export default function Appbar() {
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

  
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>  
      <AppBar
        position="sticky"
        theme={theme}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
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
          <IconButton color="inherit" onClick={() => handleClick("/")}>
            Home
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => handleClick("/customer/dashboard")}
          >
            Menu
          </IconButton >
          <IconButton color="inherit" onClick={() => handleClick("/signinsignup")}>
            Login
          </IconButton>
          <IconButton color="inherit" onClick={() => handleClick("/hotline")}>
            Contact 
          </IconButton>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
