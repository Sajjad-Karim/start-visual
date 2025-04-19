import React, { useEffect, useMemo } from "react";
import { Formik, FieldArray, Form } from "formik";
import {
  ColorInput,
  FontInputs,
  InputField,
  SectionComponent,
  TextAreaField,
} from "../../components/admin/about/AboutForms";
import { validationSchema } from "../../components/admin/about/ValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { getAbout, saveAbout } from "../../features/about/about.action";
import { toast } from "react-hot-toast";
import { resetSaveAboutState } from "../../features/about/about.slicer";

const fallbackInitialValues = {
  hero: {
    title: "START VISUAL",
    text: "Start Visual Is a Full Service Art, Film & Media Production Agency with offices in New York and Los Angeles. We have more than a 14 years of experience collaborating with industry professionals who are at the highest echelons of the Art, Fashion, and Media Industry. At the same time we look to collaborate with up and coming talent that are reshaping the creative landscape and bringing a new perspective to the world.",
    style: {
      backgroundColor: "#1A1A1A",
      textColor: "#ffffff",
      showTitle: false,
      titleFont: {
        family: "Syncopate, sans-serif",
        size: "3.5rem",
        weight: "700",
        letterSpacing: "0.2em",
      },
      textFont: {
        family: "Inter, sans-serif",
        size: "1.25rem",
        weight: "400",
        letterSpacing: "0.05em",
      },
    },
  },
  sections: [],
};

const AboutForm = () => {
  const dispatch = useDispatch();
  const {
    aboutData,
    isSaveAboutLoading,
    isSaveAboutSuccess,
    isSaveAboutFailed,
    error,
    message,
  } = useSelector((state) => state.about);

  // Load data
  useEffect(() => {
    dispatch(getAbout());
  }, [dispatch]);

  // Notify save result
  useEffect(() => {
    if (isSaveAboutSuccess) {
      toast.success(message || "Content saved successfully!");
      dispatch(resetSaveAboutState());
      dispatch(getAbout());
    }
    if (isSaveAboutFailed) {
      toast.error(error || "Failed to save content.");
      dispatch(resetSaveAboutState());
    }
  }, [isSaveAboutSuccess, isSaveAboutFailed, error, message, dispatch]);

  // ✨ Compute dynamic initialValues from API
  const initialValues = useMemo(() => {
    const data = aboutData?.[0];
    if (!data) return fallbackInitialValues;

    const sections = data.sections?.map((section) => ({
      ...section,
      image: section.image?.url || null,
    }));

    return {
      hero: data.hero,
      sections: sections || [],
    };
  }, [aboutData]);

  // ✅ Handle Submit
  const handleSubmit = async (values) => {
    const imageMap = {};
    const formData = new FormData();

    const sections = await Promise.all(
      values.sections.map(async (section, index) => {
        const sectionId = section.title
          ? section.title.toLowerCase().replace(/\s+/g, "-")
          : `section-${index}`;

        if (section.image instanceof File) {
          imageMap[sectionId] = section.image.name;
          formData.append("files", section.image, section.image.name);
        }

        return {
          id: sectionId,
          title: section.title,
          text: section.text,
          style: {
            ...section.style,
            showTitle: true,
          },
        };
      })
    );

    const payload = {
      hero: { ...values.hero },
      sections,
    };

    formData.append("content", JSON.stringify(payload));
    formData.append("imageMap", JSON.stringify(imageMap));

    dispatch(saveAbout(formData));
  };

  return (
    <div className="space-y-6 px-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          About Page Editor
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Customize your company’s story, hero section, and service highlights.
        </p>
      </div>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="space-y-3">
            <HeroSection />

            <FieldArray name="sections">
              {({ push, remove }) => (
                <>
                  {values.sections.map((_, index) => (
                    <SectionComponent
                      key={index}
                      index={index}
                      remove={remove}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      push({
                        title: "",
                        text: "",
                        image: null,
                        style: {
                          backgroundColor: "#FFFFFF",
                          textColor: "#000000",
                          showTitle: true,
                          titleFont: {
                            family: "",
                            weight: "",
                            letterSpacing: "",
                            size: "",
                          },
                          textFont: {
                            family: "",
                            weight: "",
                            letterSpacing: "",
                            size: "",
                          },
                        },
                      })
                    }
                    className="bg-[#363434] mr-2 hover:bg-[#000] cursor-pointer text-white px-6 py-2 rounded"
                  >
                    Add Section
                  </button>
                </>
              )}
            </FieldArray>

            <button
              type="submit"
              disabled={isSaveAboutLoading}
              className={`px-6 py-2 rounded text-white text-sm font-medium transition ${
                isSaveAboutLoading
                  ? "bg-gray-500 cursor-not-allowed opacity-60"
                  : "bg-black hover:bg-[#303030] cursor-pointer"
              }`}
            >
              {isSaveAboutLoading ? "Updating Content..." : "Save Content"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AboutForm;

// 🧩 Hero Section
const HeroSection = () => (
  <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 space-y-6">
    <h2 className="text-2xl font-bold mb-4">Hero Section</h2>
    <div className="space-y-4">
      <InputField
        name="hero.title"
        label="Title"
        placeholder="e.g. START VISUAL"
      />
      <TextAreaField
        name="hero.text"
        label="Text"
        placeholder="e.g. Welcome to our creative studio..."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorInput
          name="hero.style.backgroundColor"
          label="Background Color"
        />
        <ColorInput name="hero.style.textColor" label="Text Color" />
      </div>
      <FontInputs prefix="hero.style.titleFont" label="Title Font" />
      <FontInputs prefix="hero.style.textFont" label="Text Font" />
    </div>
  </div>
);
