import { STAR_VISUAL_API } from '../../http/config';

export const uploadProjectApi = (payload) =>
  STAR_VISUAL_API.post('projects/add', payload, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const getProjectsApi = () => STAR_VISUAL_API.get('projects');
export const toggleProjectStatusApi = (payload) =>
  STAR_VISUAL_API.patch(`projects/${payload}/toggle-status`);
export const deleteProjectApi = (payload) =>
  STAR_VISUAL_API.delete(`projects/remove/${payload}`);

export const updateProjectApi = (id, formData) =>
  STAR_VISUAL_API.put(`projects/update/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
