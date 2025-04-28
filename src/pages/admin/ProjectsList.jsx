import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProject,
  getProjects,
  toggleProjectStatus,
} from '../../features/project/project.actions';
import Spinner from '../../components/Spinner';
import {
  resetDeleteProjectState,
  resetToggleState,
} from '../../features/project/project.slicer';
import toast from 'react-hot-toast';

const ProjectList = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    projectMedia,
    isGetProjectLoading,
    isToggleProjectStatusSuccess,
    message,
    isDeleteProjectSuccess,
  } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const projects = projectMedia?.flatMap((portfolio) => portfolio || []) || [];
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  // Toggle status handler
  const handleToggleStatus = (id) => {
    dispatch(toggleProjectStatus(id));
    dispatch(getProjects());
  };

  useEffect(() => {
    if (isToggleProjectStatusSuccess) {
      dispatch(resetToggleState());
      toast.success(message);
    }
  }, [dispatch, message, isToggleProjectStatusSuccess]);

  const handleDelete = (id) => {
    dispatch(deleteProject(id));
  };

  useEffect(() => {
    if (isDeleteProjectSuccess) {
      dispatch(resetDeleteProjectState());
      toast.success(message);
      dispatch(getProjects());
    }
  }, [dispatch, message, isDeleteProjectSuccess]);

  // const handlePreview = (project) => {
  //   console.log("Preview:", project.id);
  // };

  return (
    <section className="px-6 space-y-6">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">
          Project List
        </h2>
        <p className="text-sm text-zinc-600">
          Browse and manage all projects. You can edit, delete, or toggle their
          online status.
        </p>
      </div>
      {isGetProjectLoading && (
        <Spinner size="md" message="Loading media..." center />
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project) => {
          const thumbnail =
            project.media?.posterUrl || project.media?.url || '';

          return (
            <li
              key={project._id}
              className="bg-white rounded-xl shadow overflow-hidden flex flex-col"
            >
              {thumbnail && (
                <img
                  src={thumbnail}
                  alt={project.media?.alt || project.title}
                  className="w-full h-48 object-contain"
                />
              )}

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {project.projectType} &bull; {project.year} &bull;{' '}
                  {project.client}
                </p>
                <p
                  className={`text-sm font-medium mb-3 ${
                    project.status === 'online'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  Status: {project.status}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/admin/edit-project/${project._id}`)
                    }
                    className="bg-black text-white px-4 py-2 cursor-pointer rounded hover:bg-gray-800 text-sm"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggleStatus(project._id)}
                    className={`cursor-pointer ${
                      project.status === 'online'
                        ? 'bg-yellow-600 hover:bg-yellow-700'
                        : 'bg-green-600 hover:bg-green-700'
                    } text-white px-4 py-2 rounded text-sm`}
                  >
                    {project.status === 'online' ? 'Set Offline' : 'Set Online'}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(project._id)}
                    className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
                  >
                    Delete
                  </button>

                  {/* <button
                    type="button"
                    onClick={() => handlePreview(project)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 text-sm"
                  >
                    Preview
                  </button> */}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectList;
