import * as React from "react";
import { Grid, Avatar, TextField, Button } from "@material-ui/core";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import axios from "axios";
import * as Yup from "yup";

const baseURL = "http://localhost:8090/feed/insertFeedback";

export default function Feedback() {
  const [post, setPost] = React.useState(null);
  const phoneRegExp = /^[+]?(?:[0-9]{2})?[0-9]{10}$/;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact_number: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      contact_number: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .notRequired(" Not Required"),
      message: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      axios.post(baseURL, values).then((response) => {
        setPost(response.data);
        console.log(response.data);
      });
      alert(JSON.stringify("Successfully submitted your feedback !", null, 2));
      resetForm();
    },
  });

  const style = {
    position: "sticky",
    padding: 10,
    height: "90vh",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    margin: "30px auto",
  };

  const avatarStyle = { backgroundColor: "#d64161" };
  const btnStyle = { margin: "10px 0" };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid align="left">
        <Box sx={style}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <FeedbackIcon />
            </Avatar>
            <h2>Feedback !</h2>
          </Grid>
          <TextField
            id="name"
            label="name"
            placeholder="Enter name"
            fullWidth
            required
            size="small"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <TextField
            id="email"
            label="email"
            placeholder="Enter email"
            fullWidth
            required
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <TextField
            id="contact_number"
            label="contactNo"
            placeholder="Enter contact no"
            fullWidth
            size="small"
            onChange={formik.handleChange}
            value={formik.values.contact_number}
          />
          {formik.touched.contact_number && formik.errors.contact_number ? (
            <div>{formik.errors.contact_number}</div>
          ) : null}

          <TextField
            id="message"
            label="message"
            multiline
            rows={8}
            placeholder="Enter your message"
            size="small"
            required
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.message}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth
            size="small"
          >
            Send
          </Button>
        </Box>
      </Grid>
    </form>
  );
}
