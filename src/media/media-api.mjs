
import { getMediaById } from "../baggintag-repo/media-repo.mjs";
import { inflateMedia } from "./media-inflation.mjs";

export async function getMedia(id) {
  const baseMedia = await getMediaById(id);
  const media = await inflateMedia(baseMedia);
  return media;
}

export default { getMedia };