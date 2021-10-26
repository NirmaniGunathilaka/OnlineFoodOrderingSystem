import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

var cardStyle = {
  display: 'block',
  width: '30vw',
  transitionDuration: '0.3s',
  height: '45vw'
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Deals() {
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <Box mt={-8}>
      <Button onClick={handleClickOpenModal} variant="outlined" style={{float: "right"}}>
        Add Deals
      </Button>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="div" gutterBottom>
            Add Deals
          </Typography>
          <TextField
            required
            id="outlined-basic"
            size="small"
            label="Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            required
            id="outlined-basic"
            size="small"
            label="Description"
            variant="outlined"
            fullWidth
          />
          <TextField
           required
            id="outlined-basic"
            size="small"
            label="Price"
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" size="medium" fullWidth>
            Add
          </Button>
        </Box>
      </Modal>
      <Typography align="center" gutterBottom="true" variant="h5">
        Deals!
      </Typography>
      <Grid container spacing={10} justify="center" >
        <Grid item xs={6}>
          <Item>
            <Card sx={{ maxWidth: 380 }}>
              <CardMedia
                component="img"
                alt="buy 1 get 1"
                height="140"
                image="/assets/f1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Buy 1 get 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Buy one large pizza, another large pizza is free!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleClickOpen}>
                  Order
                </Button>
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                  >
                    Buy 1 Get 1 FREE!
                  </BootstrapDialogTitle>
                  <DialogContent dividers>
                    <Typography gutterBottom>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </Typography>
                    <Typography gutterBottom>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                      Confirm Order
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
                <Typography variant="subtitle1">Rs.2000.00</Typography>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            {" "}
            <Card sx={{ maxWidth: 380 }}>
              <CardMedia
                component="img"
                alt="buy 1 get 1"
                height="140"
                image="/assets/f1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Buy 1 get 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Buy one large pizza, another large pizza is free!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Order</Button>
                <Typography variant="subtitle1">Rs.2000.00</Typography>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Card sx={{ maxWidth: 380 }}>
              <CardMedia
                component="img"
                alt="buy 1 get 1"
                height="140"
                image="/assets/f1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Buy 1 get 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Buy one large pizza, another large pizza is free!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"> Order</Button>
                <Typography variant="subtitle1">Rs.2000.00</Typography>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Card sx={{ maxWidth: 380 }}>
              <CardMedia
                component="img"
                alt="buy 1 get 1"
                height="140"
                image="/assets/f1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Buy 1 get 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Buy one large pizza, another large pizza is free!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Order</Button>
                <Typography variant="subtitle1">Rs.2000.00</Typography>
              </CardActions>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
