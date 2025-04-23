import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { projectValidationSchema } from '../../components/admin/forms/ValidationSchema';
import ProjectMetadataForm from '../../components/admin/forms/ProjectMetadataForm';
import GalleryUploadForm from '../../components/admin/forms/GalleryUploadForm';
import CreditsForm from '../../components/admin/forms/CreditsForm';
import StyleForm from '../../components/admin/forms/StyleForm';

import { useDispatch, useSelector } from 'react-redux';
import {
  getProjects,
  updateProject,
} from '../../features/project/project.actions';
import toast from 'react-hot-toast';
import { resetUpdateState } from '../../features/project/project.slicer';

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    projectMedia,
    isUpdateProjectSuccess,
    isUpdateProjectLoading,
    isUpdateProjectFailed,
    message,
  } = useSelector((state) => state?.project);

  useEffect(() => {
    dispatch(getProjects());
    if (isUpdateProjectSuccess) {
      toast.success(message);
      dispatch(resetUpdateState());
      navigate('/admin/projects');
    }
    if (isUpdateProjectFailed) {
      toast.success(`Unable to update`);
      dispatch(resetUpdateState());
    }
  }, [
    dispatch,
    isUpdateProjectFailed,
    navigate,
    isUpdateProjectSuccess,
    message,
  ]);

  // Flatten all projects and find the one with matching id
  const allProjects = projectMedia.flatMap((p) => p || []);
  const project = allProjects.find((p) => p._id === id);

  if (!project) {
    return <div className="p-6 text-red-500">Project not found</div>;
  }

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

    // 🖼️ Process gallery
    const galleryJSON = values.gallery.map((item) => ({
      fileName: item.file
        ? item.file.name
        : item.fileName || 'existing_' + item.order,
      type: item.type,
      alt: item.alt,
      order: item.order,
      displaySize: item.displaySize,
      isMain: item.isMain,
      url: item.file ? undefined : item.url, // preserve existing image
    }));
    formData.append('gallery', JSON.stringify(galleryJSON));

    values.gallery.forEach((item) => {
      if (item.file) {
        formData.append('files', item.file, item.file.name);
      }
    });

    dispatch(updateProject({ id, formData }));
  };

  return (
    <Formik
      initialValues={project}
      validationSchema={projectValidationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({
        values,
        handleChange,
        setFieldValue,
        handleSubmit,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          <h2 className="text-2xl font-bold">Edit Project</h2>

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

          <div className="text-end">
            <button
              type="submit"
              className="bg-black text-white px-6 cursor-pointer py-2 rounded"
            >
              {isUpdateProjectLoading ? 'updating changes' : 'Update Changes'}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default EditProject;
