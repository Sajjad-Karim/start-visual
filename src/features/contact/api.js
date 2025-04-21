import { STAR_VISUAL_API } from '../../http/config';

export const updateContactApi = (payload) =>
  STAR_VISUAL_API.post('contact', payload, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const getContactApi = () => STAR_VISUAL_API.get('contact');
