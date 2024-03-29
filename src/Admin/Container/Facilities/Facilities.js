import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { object, string, number, date, InferType } from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux"
import { addFacilities } from "./Redux/action/facilities.action";

function Facilities(props) {
  const [open, setOpen] = React.useState(false);


  const facilities = useSelector(state => state.facilities)
  console.log(facilities);

  const dispatch = useDispatch()
    // dialog box open
  const handleClickOpen = () => {
    setOpen(true);
  };

  // dialog box close
  const handleClose = () => {
    setOpen(false);
  };

  // facilities schema
  let facilitiesSchema = object({
    name: string().required(),
    description: string().required(),
  });

  // formik
  const formik = useFormik({
    initialValues: {
      name: "",
      description: ''
    },
    validationSchema: facilitiesSchema,
    onSubmit: (values) => {
        dispatch(addFacilities(values))
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add facilities
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Facilities</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              name="name"
              label="Facilities name"
              type="text"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={errors.name && touched.name ? true : false}
              helperText={errors.name && touched.name ? errors.name : ''}
            />
            <TextField
              margin="dense"
              id="name"
              name="description"
              label="Facilities description"
              type="text"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              error={errors.description && touched.description ? true : false}
              helperText={errors.description && touched.description ? errors.description : ''}
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Add</Button>
            </DialogActions>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}

export default Facilities;
