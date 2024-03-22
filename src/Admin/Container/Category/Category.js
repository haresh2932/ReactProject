import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { object, string } from "yup";
import { useFormik } from "formik";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { GridRowModes, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Category() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);

  const rNo = Math.floor(Math.random() * 1000);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const localData = JSON.parse(localStorage.getItem("category"));
    if (localData) {
      setData(localData);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = (values) => {
    const localData = JSON.parse(localStorage.getItem("category")) || [];
    const newData = [...localData, { ...values, id: rNo }];
    localStorage.setItem("category", JSON.stringify(newData));
    setData(newData);
    handleClose();
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    localStorage.setItem("category", JSON.stringify(newData));
    setData(newData);
  };

  const categorySchema = object({
    category_name: string().required(),
    category_description: string().required().min(10),
  });

  const formik = useFormik({
    initialValues: {
      category_name: "",
      category_description: "",
    },
    validationSchema: categorySchema,
    onSubmit: handleAdd,
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;

  const columns = [
    { field: "category_name", headerName: "Name", width: 130 },
    { field: "category_description", headerName: "Description", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: ({ row }) => (
        <ActionsCell
          row={row}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ),
    },
  ];

  const ActionsCell = ({ row, handleEdit, handleDelete }) => {
    return (
      <div>
        <Button onClick={() => handleEdit(row.id)}>
          <EditIcon />
        </Button>
        <Button onClick={() => handleDelete(row.id)}>
          <DeleteIcon />
        </Button>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Category</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              name="category_name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category_name}
              error={
                errors.category_name && touched.category_name ? true : false
              }
              helperText={
                errors.category_name && touched.category_name
                  ? errors.category_name
                  : ""
              }
            />
            <TextField
              margin="dense"
              name="category_description"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category_description}
              error={
                errors.category_description && touched.category_description
                  ? true
                  : false
              }
              helperText={
                errors.category_description && touched.category_description
                  ? errors.category_description
                  : ""
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          checkboxSelection
        />
      </div>
    </React.Fragment>
  );
}
