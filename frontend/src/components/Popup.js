import React, { useState, useEffect } from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import CloseIcon from '@material-ui/icons/Close';
//import Controls from "./controls/Controls";
import {
    Grid,
    Paper,
    Avatar,
    Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from '@material-ui/core/Box';
import Checkbox from "@material-ui/core/Checkbox";


export default function Popup(props) {
    const paperStyle = { padding: 20, width: 300, margin: "0px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: "orange" };
    const typoStyle = { fontSize: 13 };
    const marginTop = { marginTop: 10 };
    const { title, children, openPopup, setOpenPopup } = props;
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    return (

        <Dialog open={openPopup} >
            {/* <DialogTitle >
                <h4>Add New Item</h4>
            </DialogTitle> */}
            <DialogContent >
                <Grid align="left">
                    <Paper style={paperStyle}>
                        <Grid align="center">
                            <Avatar style={avatarStyle}>
                                <AddShoppingCartOutlinedIcon />
                            </Avatar>
                            <h2 style={headerStyle}>Add New Item</h2>
                            <Typography
                                component={"span"}
                                varient="caption"
                                style={typoStyle}
                                gutterBottom
                            >
                            </Typography>
                        </Grid>
                        <form>
                            <TextField fullWidth label="Item Type" />
                            <TextField fullWidth label="Description" />

                            <input accept="image/*" type="file" id="select-image" style={{ display: 'none' }} onChange={e => setSelectedImage(e.target.files[0])} />
                            <label htmlFor="select-image">
                                <Box m={1} pb={3} ml={0}>
                                    <Button variant="contained" color="primary" component="span">
                                        Upload Image
                                    </Button>
                                </Box>
                            </label>
                            {imageUrl && selectedImage && (
                                <Box mt={2} textAlign="center">
                                    <div>Image Preview:</div>
                                    <img src={imageUrl} alt={selectedImage.name} height="100px" />
                                </Box>
                            )}
                            <Box px={12} >
                                <Button type="submit" variant="contained" color="primary" >
                                    Save
                                </Button>
                            </Box>
                        </form>
                    </Paper>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}