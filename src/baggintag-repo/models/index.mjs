import defineDataSetGroupDataSet from "./data-set-group-data-set.mjs";
import defineDataSetGroup from "./data-set-group.mjs";
import defineDataSetMedia from "./data-set-media.mjs";
import defineDataSet from "./data-set.mjs";
import defineMediaTagSet from "./media-tag-set.mjs";
import defineMedia from "./media.mjs";
import defineTagMappingSet from "./tag-mapping-set.mjs";
import defineTagMapping from "./tag-mapping.mjs";
import defineTagSet from "./tag-set.mjs";
import defineTag from "./tag.mjs";
import defineRelationships from "./relationships.mjs";
import getDatabase from '../connectionBuilder.mjs';

const database = getDatabase();

const context = {
  database,
  DataSetGroupDataSet: defineDataSetGroupDataSet(database),
  DataSetGroup: defineDataSetGroup(database),
  DataSetMedia: defineDataSetMedia(database),
  DataSet: defineDataSet(database),
  MediaTagSet: defineMediaTagSet(database),
  Media: defineMedia(database),
  TagMappingSet: defineTagMappingSet(database),
  TagMapping: defineTagMapping(database),
  TagSet: defineTagSet(database),
  Tag: defineTag(database),
}

defineRelationships(context);

export default context;