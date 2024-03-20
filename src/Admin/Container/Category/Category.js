import React, { useEffect } from "react";
import { object, string, number, date, InferType } from "yup";
import { useFormik } from "formik";

function Category(props) {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("http://localhost:8000/fruits");
    const data = await response.json();

    console.log(data);
  };

  let categorySchema = object({
    category: string().required("Please enter category"),
    description: string()
      .required()
      .min(10, "Description is atleast 10 charecter long."),
  });

  const formik = useFormik({
    initialValues: {
      category: "",
      description: "",
    },
    validationSchema: categorySchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null));
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="category"
          className="w-10 form-control border-0 py-3 mb-4"
          placeholder="Your Category"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.category}
        />
        <span className="error">
          {touched.category && errors.category ? errors.category : ""}
        </span>
        <input
          type="text"
          name="description"
          className="w-10 form-control border-0 py-3 mb-4"
          placeholder="Enter Your Description"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.description}
        />
        <span className="error">
          {touched.description && errors.description ? errors.description : ""}
        </span>

        <button
          className="w-10 btn form-control border-secondary py-3 bg-white text-primary "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Category;
