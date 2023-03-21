import { open } from 'node:fs/promises';
import path from 'node:path';
import config from '../../config.json' assert { type: 'json' };

export async function inflateMedia(media) {
  const { fileLocator } = media;
  const file = await open(path.join(config.mediaFolder, fileLocator), 'r');
  const buffer = await file.readFile();
  const base64 = buffer.toString('base64');
  const dataUrl = `data:${media.mediaType};base64,${base64}`;
  return {
    id: media.id,
    fileName: media.fileName,
    mediaType: media.mediaType,
    mediaSource: media.mediaSource,
    mediaWidth: media.mediaWidth,
    mediaHeight: media.mediaHeight,
    dataUrl,
  };
}

export default { inflateMedia };