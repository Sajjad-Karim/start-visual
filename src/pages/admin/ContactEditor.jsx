import React, { useEffect, useMemo } from 'react';
import { Formik, Form } from 'formik';
import PageStyleSection from '../../components/admin/contact/PageStyleSection';
import HeaderMediaSection from '../../components/admin/contact/HeaderMediaSection';
import LocationList from '../../components/admin/contact/LocationList';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContact,
  updateContact,
} from '../../features/contact/contact.action';
import toast from 'react-hot-toast';
import { resetSaveContactState } from '../../features/contact/contact.slicer';

const DEFAULT_INITIAL = {
  style: {
    backgroundColor: '#1A1A1A',
    textColor: '#FFFFFF',
    titleFont: { family: 'Syncopate, sans-serif', fontStyle: 'normal' },
    textFont: { family: 'Inter, sans-serif', fontStyle: 'normal' },
  },
  headerMedia: {
    type: 'image',
    height: '322px',
    image: {
      url: '',
      alt: 'Contact',
      file: null,
    },
    overlay: {
      opacity: 0.6,
      gradient: 'linear-gradient(to top, #1A1A1A, transparent)',
    },
  },
  locations: [
    {
      city: '',
      address: [''],
      phones: [''],
      zipCode: '',
      email: [''],
      order: 1,
    },
  ],
  gradientDirection: 'to top',
  gradientColor1: '#1A1A1A',
  gradientColor2: 'transparent',
};

const ContactEditor = () => {
  const dispatch = useDispatch();

  // Get the stored contact data from Redux
  const { contactData, isContactSuccess, isSaveContactSuccess, message } =
    useSelector((state) => state?.contact);

  useEffect(() => {
    if (isSaveContactSuccess) {
      toast.success(message);
      dispatch(resetSaveContactState());
    }
    dispatch(getContact());
  }, [dispatch, isSaveContactSuccess, message]);

  // Merge fetched contact data with default fallback
  const initialValues = useMemo(() => {
    if (!isContactSuccess || !contactData) return DEFAULT_INITIAL;

    const { headerMedia, style, locations } = contactData;

    // Extract gradient colors from overlay.gradient if available
    const gradientMatch = headerMedia?.overlay?.gradient?.match(
      /linear-gradient\(([^,]+),\s*([^,]+),\s*([^)]+)\)/
    );

    const [
      _,
      direction = 'to top',
      color1 = '#1A1A1A',
      color2 = 'transparent',
    ] = gradientMatch || [];

    return {
      style,
      headerMedia: {
        ...headerMedia,
        image: {
          ...headerMedia?.image,
          file: null, // file must be reset for new upload
        },
      },
      locations,
      gradientDirection: direction,
      gradientColor1: color1.trim(),
      gradientColor2: color2.trim(),
    };
  }, [contactData, isContactSuccess]);

  const handleSubmit = (values) => {
    const formData = new FormData();

    formData.append('file', values.headerMedia.image.file);
    formData.append('style', JSON.stringify(values.style));
    formData.append('overlay', JSON.stringify(values.headerMedia.overlay));
    formData.append('locations', JSON.stringify(values.locations));
    formData.append('type', values.headerMedia.type);
    formData.append('height', values.headerMedia.height);
    formData.append('alt', values.headerMedia.image.alt);
    formData.append('gradientDirection', values.gradientDirection);

    dispatch(updateContact(formData));
  };

  return (
    <div className="space-y-6 px-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Contact Page Admin Panel
      </h2>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-10">
            <PageStyleSection />
            <HeaderMediaSection values={values} setFieldValue={setFieldValue} />
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
