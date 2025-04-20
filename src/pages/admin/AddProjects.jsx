import React, { useEffect } from 'react';
import { Formik } from 'formik';
import ProjectMetadataForm from '../../components/admin/forms/ProjectMetadataForm';
import GalleryUploadForm from '../../components/admin/forms/GalleryUploadForm';
import CreditsForm from '../../components/admin/forms/CreditsForm';
import StyleForm from '../../components/admin/forms/StyleForm';
import { projectValidationSchema } from '../../components/admin/forms/ValidationSchema';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProjects,
  uploadProject,
} from '../../features/project/project.actions';
import toast from 'react-hot-toast';
import { resetUploadProjectState } from '../../features/project/project.slicer';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  title: '',
  description: '',
  projectType: '',
  status: '',
  order: '',
  client: '',
  year: '',
  location: '',
  gallery: [],
  credits: [{ role: '', name: '', order: 0 }],
  style: {
    backgroundColor: '#1A1A1A',
    textColor: '#FFFFFF',
    creditStyles: {
      fontSize: '0.875rem',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '500',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#FF69B4',
    },
  },
};

const AddProjects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isUploadProjectLoading,
    isUploadProjectSuccess,
    isUploadProjectFailed,
    error,
    message,
  } = useSelector((state) => state.project);
  const handleSubmit = async (values) => {
    const formData = new FormData();

    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('projectType', values.projectType);
    formData.append('status', values.status);
    formData.append('order', values.order);
    formData.append('client', values.client);
    formData.append('year', values.year);
    formData.append('location', values.location);

    formData.append('style', JSON.stringify(values.style));

    formData.append('credits', JSON.stringify(values.credits));

    const galleryJSON = values.gallery.map((item) => ({
      fileName: item.file?.name,
      type: item.type,
      alt: item.alt,
      order: item.order,
      displaySize: item.displaySize,
      isMain: item.isMain,
    }));
    formData.append('gallery', JSON.stringify(galleryJSON));

    values.gallery.forEach((item) => {
      if (item.file) {
        formData.append('files', item.file);
      }
    });
    dispatch(uploadProject(formData));
  };

  useEffect(() => {
    if (isUploadProjectSuccess) {
      toast.success(message || 'Project Added successfully');
      dispatch(getProjects());
      dispatch(resetUploadProjectState());
      navigate('/admin/projects');
    }
    if (isUploadProjectFailed) {
      toast.error(error || 'Failed to delete media');
      dispatch(resetUploadProjectState());
    }
  }, [
    dispatch,
    navigate,
    isUploadProjectSuccess,
    isUploadProjectFailed,
    error,
    message,
  ]);

  return (
    <div className="space-y-6 px-6">
      <div className="mb-6 space-y-1">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">
          Add New Project
        </h1>
        <p className="text-sm text-zinc-600">
          Enter metadata, upload gallery items, assign credits, and customize
          styles for this project.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={projectValidationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          setFieldValue,
          handleChange,
          handleSubmit,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit} className="space-y-6">
            <ProjectMetadataForm
              values={values}
              handleChange={handleChange}
              errors={errors}
              touched={touched}
            />
            <GalleryUploadForm
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            />
            <CreditsForm
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            />
            <StyleForm values={values} handleChange={handleChange} />
            <div className="text-end pt-4">
              <button
                type="submit"
                className="bg-black cursor-pointer text-white px-6 py-2 rounded"
              >
                {isUploadProjectLoading
                  ? 'Uploading Project'
                  : 'Submit Project'}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddProjects;
