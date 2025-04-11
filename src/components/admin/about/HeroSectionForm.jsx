import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const HeroSchema = Yup.object().shape({
  title: Yup.string(),
  text: Yup.string().required("Hero description is required"),
  backgroundColor: Yup.string().required(),
  textColor: Yup.string().required(),
});

const HeroSectionForm = ({ hero, setHero }) => {
  const initialValues = hero || {
    title: "",
    text: "",
    backgroundColor: "#1A1A1A",
    textColor: "#FFFFFF",
    showTitle: true,
    titleFont: {
      family: "Syncopate, sans-serif",
      size: "3.5rem",
      weight: "700",
      letterSpacing: "0.2em",
      lineHeight: "1.2",
      textTransform: "uppercase",
      textDecoration: "none",
      fontStyle: "normal",
    },
    textFont: {
      family: "Inter, sans-serif",
      size: "1.25rem",
      weight: "400",
      letterSpacing: "0.05em",
      lineHeight: "1.6",
      textTransform: "none",
      textDecoration: "none",
      fontStyle: "normal",
    },
    padding: {
      desktop: "8rem",
      mobile: "4rem",
    },
    maxWidth: "64rem",
    animation: {
      type: "fade",
      duration: "1s",
      delay: "0s",
    },
    layout: {
      type: "contained",
      alignment: "center",
      verticalAlignment: "center",
    },
    borderRadius: "0px",
    boxShadow: "none",
    backgroundOverlay: "none",
  };

  const handleSubmit = (values) => {
    setHero({
      title: values.title,
      text: values.text,
      style: {
        ...initialValues,
        backgroundColor: values.backgroundColor,
        textColor: values.textColor,
        showTitle: values.showTitle,
      },
    });
  };

  return (
    <div className="bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold mb-4">Hero Section</h2>

      <Formik
        initialValues={{
          title: initialValues.title,
          text: initialValues.text,
          backgroundColor: initialValues.backgroundColor,
          textColor: initialValues.textColor,
          showTitle: initialValues.showTitle,
        }}
        validationSchema={HeroSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, handleChange, errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Title</label>
              <Field
                name="title"
                placeholder="Start Visual"
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Text</label>
              <Field
                name="text"
                as="textarea"
                rows={4}
                placeholder="Describe the company..."
                className="w-full border p-2 rounded"
              />
              {errors.text && touched.text && (
                <p className="text-red-500 text-xs">{errors.text}</p>
              )}
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium">Background</label>
                <Field
                  name="backgroundColor"
                  type="color"
                  className="w-full h-10 border rounded"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium">Text Color</label>
                <Field
                  name="textColor"
                  type="color"
                  className="w-full h-10 border rounded"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Field type="checkbox" name="showTitle" />
              <label>Show Title in Hero</label>
            </div>

            <div className="text-end">
              <button
                type="submit"
                className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800"
              >
                Save Hero
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default HeroSectionForm;
