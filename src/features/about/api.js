import { STAR_VISUAL_API } from '../../http/config';

export const saveAboutApi = (payload) =>
  STAR_VISUAL_API.post('about/addContent', payload, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const getAboutApi = () => STAR_VISUAL_API.get('about');
