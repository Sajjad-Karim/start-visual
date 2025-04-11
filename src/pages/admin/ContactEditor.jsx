import React from "react";
import { Formik, Form } from "formik";
import PageStyleSection from "../../components/admin/contact/PageStyleSection";
import HeaderMediaSection from "../../components/admin/contact/HeaderMediaSection";
import LocationList from "../../components/admin/contact/LocationList";

const ContactEditor = () => {
  const initialValues = {
    style: {
      backgroundColor: "#1A1A1A",
      textColor: "#FFFFFF",
      titleFont: { family: "Syncopate, sans-serif", fontStyle: "normal" },
      textFont: { family: "Inter, sans-serif", fontStyle: "normal" },
    },
    headerMedia: {
      type: "image",
      height: "322px",
      image: { url: "", alt: "" },
      overlay: { opacity: 0.6, gradient: "" },
    },
    locations: [
      {
        city: "",
        address: [""],
        phones: [""],
        zipCode: "",
        email: [""],
        order: 1,
      },
    ],
  };

  return (
    <div className="space-y-6 px-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Contact Page Admin Panel
      </h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("Submitted Contact Config:", values);
          alert("Contact configuration logged to console.");
        }}
      >
        {({ values }) => (
          <Form className="space-y-10">
            <PageStyleSection />
            <HeaderMediaSection />
            <LocationList values={values} />
            <div className="pt-8">
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-md shadow hover:bg-gray-800"
              >
                Save Contact Page
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactEditor;
