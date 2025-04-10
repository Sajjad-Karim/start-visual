import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string().required("Project title is required"),
  description: Yup.string().required("Project description is required"),
  projectType: Yup.string()
    .oneOf(["photo", "motion", "special"])
    .required("Project type is required"),
  status: Yup.string()
    .oneOf(["online", "offline"])
    .required("Project status is required"),
  order: Yup.number()
    .typeError("Order must be a number")
    .required("Order is required"),
  client: Yup.string(),
  year: Yup.number()
    .nullable()
    .transform((_, val) => (val === "" ? null : Number(val)))
    .typeError("Year must be a number"),
  location: Yup.string(),
});

const ProjectMetadataForm = () => {
  const initialValues = {
    title: "",
    description: "",
    projectType: "",
    status: "",
    order: "",
    client: "",
    year: "",
    location: "",
  };

  const handleSubmit = (values) => {
    console.log("📦 Submitted metadata:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 space-y-8">
          <h2 className="text-xl font-semibold text-zinc-900 mb-6">
            Project Metadata
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Title *</label>
              <Field
                name="title"
                className="w-full border border-zinc-300 rounded px-4 py-2 text-sm"
                placeholder="Enter project title"
              />
              {errors.title && touched.title && (
                <div className="text-sm text-red-500 mt-1">{errors.title}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Project Type *
              </label>
              <Field
                as="select"
                name="projectType"
                className="w-full border border-zinc-300 rounded px-4 py-2 text-sm"
              >
                <option value="">Select type</option>
                <option value="photo">Photo</option>
                <option value="motion">Motion</option>
                <option value="special">Special</option>
              </Field>
              {errors.projectType && touched.projectType && (
                <div className="text-sm text-red-500 mt-1">
                  {errors.projectType}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Status *</label>
              <Field
                as="select"
                name="status"
                className="w-full border border-zinc-300 rounded px-4 py-2 text-sm"
              >
                <option value="">Select status</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </Field>
              {errors.status && touched.status && (
                <div className="text-sm text-red-500 mt-1">{errors.status}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Order *</label>
              <Field
                name="order"
                type="number"
                className="w-full border border-zinc-300 rounded px-4 py-2 text-sm"
                placeholder="Grid order"
              />
              {errors.order && touched.order && (
                <div className="text-sm text-red-500 mt-1">{errors.order}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Client</label>
              <Field
                name="client"
                className="w-full border border-zinc-300 rounded px-4 py-2 text-sm"
                placeholder="Client name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Year</label>
              <Field
                name="year"
                type="number"
                className="w-full border border-zinc-300 rounded px-4 py-2 text-sm"
                placeholder="Year of project"
              />
              {errors.year && touched.year && (
                <div className="text-sm text-red-500 mt-1">{errors.year}</div>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Location</label>
              <Field
                name="location"
                className="w-full border border-zinc-300 rounded px-4 py-2 text-sm"
                placeholder="Location info"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 mt-4">
              Description *
            </label>
            <Field
              as="textarea"
              name="description"
              rows={4}
              className="w-full border border-zinc-300 rounded px-4 py-2 text-sm"
              placeholder="Short project description"
            />
            {errors.description && touched.description && (
              <div className="text-sm text-red-500 mt-1">
                {errors.description}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-zinc-900 text-white px-6 py-2 rounded-lg hover:bg-zinc-800 transition text-sm font-medium mt-6"
          >
            SaveProject Credits
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProjectMetadataForm;
