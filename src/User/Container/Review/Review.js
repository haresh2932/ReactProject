import React, { useState } from "react";
import { IconButton, Rating, TextField } from "@mui/material";
import { object, string, number, date, InferType } from "yup";
import { useFormik } from "formik";
import {
  addShopDetail,
  deleteReview,
  editReview,
} from "../../../Redux/action/review.action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Review(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.review);
  const { id } = useParams();
  const [edit, setEdit] = useState0(false);

  let reviewSchema = object({
    name: string().required(),
    email: string().email().required(),
    review: string().required(),
    rating: number().min(1).max(5),
  });

  const formik = useFormik({
    initialValues: {
      productId: id,
      name: "",
      email: "",
      review: "",
      rating: 0,
    },
    validationSchema: reviewSchema,
    onSubmit: (values, { resetForm }) => {
      if (edit) {
        dispatch(editReview(values));
      } else {
        dispatch(addShopDetail(values));
      }
      resetForm();
    },
  });

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    formik;

  const handleDelete = (id) => {
    dispatch(deleteReview(id));
  };

  const handleEdit = (data) => {
    console.log(data);
    formik.setValues(data);
    setEdit(true);
  };
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <h4 className="mb-5 fw-bold">Leave a Reply</h4>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="border-bottom rounded">
              <TextField
                type="text"
                name="name"
                id="name"
                className="form-control border-0 me-4"
                placeholder="Your Name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.name && errors.name ? true : false}
                helperText={touched.name && errors.name ? errors.name : ""}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="border-bottom rounded">
              <TextField
                type="email"
                className="form-control border-0"
                placeholder="Your Email"
                name="email"
                id="email"
                value={values.email}
                error={touched.email && errors.email ? true : false}
                helperText={touched.email && errors.email ? errors.email : ""}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="border-bottom rounded my-4">
              <TextField
                name="review"
                id="review"
                className="form-control border-0"
                cols={30}
                rows={8}
                placeholder="Your Review *"
                spellCheck="false"
                defaultValue={""}
                value={values.review}
                error={touched.review && errors.review ? true : false}
                helperText={
                  touched.review && errors.review ? errors.review : ""
                }
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="d-flex justify-content-between py-3 mb-5">
              <div className="d-flex align-items-center">
                <p className="mb-0 me-3">Please rate:</p>
                <div
                  className="d-flex align-items-center"
                  style={{ fontSize: 12 }}
                >
                  <Rating
                    name="rating"
                    value={values.rating}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.rating && errors.rating ? true : false}
                    helperText={
                      touched.rating && errors.rating ? errors.rating : ""
                    }
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn border border-secondary text-primary rounded-pill px-4 py-3"
              >
                {" "}
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>
      {data.isloading ? (
        <p>Loading....</p>
      ) : data.error ? (
        <p>{data.error}</p>
      ) : (
        data.review.map((v, index) => (
          <>
            <div>
              {/* <img
                src="img/avatar.jpg"
                className="img-fluid rounded-circle p-3"
                style={{ width: 100, height: 100 }}
                alt
              /> */}
              <div className>
                <div className="d-flex justify-content-between">
                  <h5>{v.name}</h5>
                  <div className="d-flex mb-3">
                    <Rating name="read-only" value={v.rating} readOnly />
                    <IconButton
                      onClick={() => handleEdit(v)}
                      variant="contained"
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      onClick={() => handleDelete(v.id)}
                      variant="contained"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
                <p className="text-dark">{v.review}</p>
              </div>
            </div>
          </>
        ))
      )}
    </div>
  );
}

export default Review;
