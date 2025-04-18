import { STAR_VISUAL_API } from "../../http/config";

export const uploadHeroApi = (payload) =>
  STAR_VISUAL_API.post("hero/upload", payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getHeroApi = () => STAR_VISUAL_API.get("hero/content");
export const deleteHeroApi = (payload) =>
  STAR_VISUAL_API.delete(`hero/remove/${payload}`);
