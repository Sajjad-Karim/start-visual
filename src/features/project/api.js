import { STAR_VISUAL_API } from '../../http/config';

export const uploadProjectApi = (payload) =>
  STAR_VISUAL_API.post('projects/add', payload, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const getProjectsApi = () => STAR_VISUAL_API.get('projects');
// export const deleteHeroApi = (payload) =>
//   STAR_VISUAL_API.delete(`hero/remove/${payload}`);
