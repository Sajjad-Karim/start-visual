import React from "react";
import { Formik } from "formik";
import ProjectMetadataForm from "../../components/admin/forms/ProjectMetadataForm";
import GalleryUploadForm from "../../components/admin/forms/GalleryUploadForm";
import CreditsForm from "../../components/admin/forms/CreditsForm";
import StyleForm from "../../components/admin/forms/StyleForm";

const initialValues = {
  title: "",
  description: "",
  projectType: "",
  status: "",
  order: "",
  client: "",
  year: "",
  location: "",
  gallery: [],
  credits: [{ role: "", name: "", order: 0 }],
  style: {
    backgroundColor: "#1A1A1A",
    textColor: "#FFFFFF",
    creditStyles: {
      fontSize: "0.875rem",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "500",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#FF69B4",
    },
  },
};

const AddProjects = () => {
  const handleSubmit = (values) => {
    const project = {
      ...values,
      media: values.gallery.find((item) => item.isMain) || values.gallery[0],
      gallery: values.gallery.map(({ file, ...rest }) => rest),
    };
    console.log(project);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-6">
          <ProjectMetadataForm values={values} handleChange={handleChange} />
          <GalleryUploadForm values={values} setFieldValue={setFieldValue} />
          <CreditsForm values={values} setFieldValue={setFieldValue} />
          <StyleForm values={values} handleChange={handleChange} />
          <div className="text-end pt-4">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded"
            >
              Submit Project
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddProjects;
