import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SectionPreview from "./SectionPreview";
import { Pencil, Trash2 } from "lucide-react";

const SectionSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  text: Yup.string().required("Text is required"),
  imageUrl: Yup.string()
    .url("Enter a valid image URL")
    .required("Image URL is required"),
  imageAlt: Yup.string(),
  backgroundColor: Yup.string().required(),
  textColor: Yup.string().required(),
});

const defaultStyle = {
  showTitle: true,
  titleFont: {
    family: "Syncopate, sans-serif",
    size: "2.25rem",
    weight: "700",
    letterSpacing: "0.2em",
    lineHeight: "1.2",
    textTransform: "uppercase",
    textDecoration: "none",
    fontStyle: "normal",
  },
  textFont: {
    family: "Inter, sans-serif",
    size: "1.125rem",
    weight: "400",
    letterSpacing: "0.05em",
    lineHeight: "1.6",
    textTransform: "none",
    textDecoration: "none",
    fontStyle: "normal",
  },
  padding: {
    desktop: "6rem",
    mobile: "4rem",
  },
  maxWidth: "32rem",
  animation: {
    type: "fade",
    duration: "1s",
    delay: "0.2s",
  },
  layout: {
    type: "standard",
    aspectRatio: "4/3",
    gap: "2rem",
    alignment: "left",
    verticalAlignment: "center",
  },
  borderRadius: "0px",
  boxShadow: "none",
  backgroundOverlay: "none",
};

const SectionEditor = ({ sections, setSections }) => {
  const [editingIndex, setEditingIndex] = useState(null);

  const handleDelete = (id) => {
    const confirm = window.confirm("Delete this section?");
    if (confirm) {
      setSections((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    const newSection = {
      id: values.id || Date.now(),
      title: values.title,
      text: values.text,
      image: {
        url: values.imageUrl,
        alt: values.imageAlt,
        animation: {
          type: "fade",
          duration: "1.5s",
          delay: "0.3s",
        },
        hoverEffect: {
          scale: 1.05,
          filter: "brightness(1.1)",
          transition: "all 0.5s ease",
        },
      },
      style: {
        ...defaultStyle,
        backgroundColor: values.backgroundColor,
        textColor: values.textColor,
      },
    };

    if (editingIndex !== null) {
      const updated = [...sections];
      updated[editingIndex] = newSection;
      setSections(updated);
      setEditingIndex(null);
    } else {
      setSections((prev) => [...prev, newSection]);
    }

    resetForm();
  };

  const initialForm = {
    title: "",
    text: "",
    imageUrl: "",
    imageAlt: "",
    backgroundColor: "#1A1A1A",
    textColor: "#FFFFFF",
  };

  const editSection = (section, index) => {
    setEditingIndex(index);
  };

  return (
    <div className="space-y-10">
      <h2 className="text-xl font-semibold">Sections</h2>

      <Formik
        initialValues={
          editingIndex !== null
            ? {
                ...sections[editingIndex],
                imageUrl: sections[editingIndex].image?.url || "",
                imageAlt: sections[editingIndex].image?.alt || "",
                backgroundColor:
                  sections[editingIndex].style?.backgroundColor || "#1A1A1A",
                textColor: sections[editingIndex].style?.textColor || "#FFFFFF",
              }
            : initialForm
        }
        enableReinitialize
        validationSchema={SectionSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="bg-white p-6 rounded shadow space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block">Title</label>
                <Field name="title" className="w-full border p-2 rounded" />
                {touched.title && errors.title && (
                  <p className="text-xs text-red-500">{errors.title}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium block">Image URL</label>
                <Field name="imageUrl" className="w-full border p-2 rounded" />
                {touched.imageUrl && errors.imageUrl && (
                  <p className="text-xs text-red-500">{errors.imageUrl}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block">Image Alt</label>
              <Field name="imageAlt" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="text-sm font-medium block">Text</label>
              <Field
                name="text"
                as="textarea"
                rows={3}
                className="w-full border p-2 rounded"
              />
              {touched.text && errors.text && (
                <p className="text-xs text-red-500">{errors.text}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block">
                  Background Color
                </label>
                <Field
                  name="backgroundColor"
                  type="color"
                  className="w-full h-10"
                />
              </div>
              <div>
                <label className="text-sm font-medium block">Text Color</label>
                <Field name="textColor" type="color" className="w-full h-10" />
              </div>
            </div>

            <div className="text">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
              >
                {editingIndex !== null ? "Update Section" : "Add Section"}
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Section Preview List */}
      {sections.length > 0 && (
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="relative group border border-gray-200 rounded shadow"
            >
              <SectionPreview section={section} index={index} />
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => editSection(section, index)}
                  className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => handleDelete(section.id)}
                  className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionEditor;
