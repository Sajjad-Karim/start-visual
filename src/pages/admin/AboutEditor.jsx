import React from 'react';
import { Formik, FieldArray, Form } from 'formik';
import {
  ColorInput,
  FontInputs,
  InputField,
  SectionComponent,
  TextAreaField,
} from '../../components/admin/about/AboutForms';
import { validationSchema } from '../../components/admin/about/ValidationSchema';
import { useDispatch } from 'react-redux';
import { saveAbout } from '../../features/about/about.action';

const initialValues = {
  hero: {
    title: 'START VISUAL',
    text: '',
    style: {
      backgroundColor: '#1A1A1A',
      textColor: '#ffffff',
      showTitle: false,
      titleFont: {
        family: 'Syncopate, sans-serif',
        size: '3.5rem',
        weight: '700',
        letterSpacing: '0.2em',
      },
      textFont: {
        family: 'Inter, sans-serif',
        size: '1.25rem',
        weight: '400',
        letterSpacing: '0.05em',
      },
    },
  },
  sections: [],
};

const AboutForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    const imageMap = {};
    const formData = new FormData();

    const sections = await Promise.all(
      values.sections.map(async (section, index) => {
        // Generate sectionId from title (or fallback)
        const sectionId = section.title
          ? section.title.toLowerCase().replace(/\s+/g, '-')
          : `section-${index}`;

        // If there's a file attached, register in imageMap and append file
        if (section.image instanceof File) {
          imageMap[sectionId] = section.image.name;
          formData.append('files', section.image, section.image.name);
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

    // Final payload to backend
    const payload = {
      hero: {
        ...values.hero,
        style: {
          ...values.hero.style,
        },
      },
      sections,
    };

    formData.append('content', JSON.stringify(payload));
    formData.append('imageMap', JSON.stringify(imageMap));

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
                        title: '',
                        text: '',
                        image: null,
                        style: {
                          backgroundColor: '#FFFFFF',
                          textColor: '#000000',
                          showTitle: true,
                          titleFont: {
                            family: '',
                            weight: '',
                            letterSpacing: '',
                            size: '',
                          },
                          textFont: {
                            family: '',
                            weight: '',
                            letterSpacing: '',
                            size: '',
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
              className="bg-black hover:bg-[#303030] cursor-pointer text-white px-6 py-2 rounded"
            >
              Save Content
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AboutForm;

// 🔽 Optional: Move this to its own file if needed
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
        placeholder="e.g. Welcome..."
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
