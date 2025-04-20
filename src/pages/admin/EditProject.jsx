import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { projectValidationSchema } from '../../components/admin/forms/ValidationSchema';
import ProjectMetadataForm from '../../components/admin/forms/ProjectMetadataForm';
import GalleryUploadForm from '../../components/admin/forms/GalleryUploadForm';
import CreditsForm from '../../components/admin/forms/CreditsForm';
import StyleForm from '../../components/admin/forms/StyleForm';

import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../features/project/project.actions';

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { projectMedia } = useSelector((state) => state?.project);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  // Flatten all projects and find the one with matching id
  const allProjects = projectMedia.flatMap((p) => p || []);
  const project = allProjects.find((p) => p._id === id);

  if (!project) {
    return <div className="p-6 text-red-500">Project not found</div>;
  }

  const handleSubmit = (values) => {
    const updated = {
      ...values,
      media: values.gallery.find((item) => item.isMain) || values.gallery[0],
      gallery: values.gallery.map(({ file, ...rest }) => rest),
    };

    console.log('📝 Updated Project Data', updated);
    // Later: call API to update
    navigate('/admin/projects');
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
              Update Changes
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default EditProject;
