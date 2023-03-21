import context from './models/index.mjs';

export async function getMediaById(id) {
  return await context.Media.findByPk(id);
}

export default {
  getMediaById,
};