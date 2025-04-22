import { STAR_VISUAL_API } from '../../http/config';

export const authAdminApi = (payload) =>
  STAR_VISUAL_API.post('jwt/login', payload);
