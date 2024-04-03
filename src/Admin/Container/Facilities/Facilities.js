import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { object, string, number, date, InferType } from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import {
  addFacilities,
  deleteFacilities,
  editFacilities,
} from "../../../Redux/action/facilities.action";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CircularProgress from "@mui/material/CircularProgress";

function Facilities(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const facilities = useSelector((state) => state.facilities);

  const [update, setUpdate] = React.useState(false);

  // dialog box open
  const handleClickOpen = () => {
    setOpen(true);
  };

  // dialog box close
  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
    setUpdate(false);
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
      description: "",
    },
    validationSchema: facilitiesSchema,
    onSubmit: (values, { resetForm }) => {
      if (update) {
        dispatch(editFacilities(values));
      } else {
        const rNo = Math.floor(Math.random() * 1000);
        dispatch(addFacilities({ ...values, id: rNo }));
      }

      resetForm();
      handleClose();
      setUpdate(false);
    },
  });

  const handleDelete = (id) => {
    dispatch(deleteFacilities(id));
  };

  const handleEdit = (data) => {
    formik.setValues(data);
    setOpen(true);
    setUpdate(true);
  };

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;

  const columns = [
    { field: "name", headerName: "Name", width: 130 },
    { field: "description", headerName: "Description", width: 130 },
    {
      field: "Action",
      headerName: "Action",
      width: 200,
      renderCell: ({ row }) => (
        <>
          <IconButton onClick={() => handleEdit(row)} variant="contained">
            <EditIcon />
          </IconButton>

          <IconButton onClick={() => handleDelete(row.id)} variant="contained">
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <>
      {facilities.isloading ? 
        <CircularProgress />
      : 
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
                  helperText={errors.name && touched.name ? errors.name : ""}
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
                  error={
                    errors.description && touched.description ? true : false
                  }
                  helperText={
                    errors.description && touched.description
                      ? errors.description
                      : ""
                  }
                />
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit">{update ? "Update" : "Add"}</Button>
                </DialogActions>
              </DialogContent>
            </form>
          </Dialog>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={facilities.facilities}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </>
      }
    </>
  );
}

export default Facilities;
