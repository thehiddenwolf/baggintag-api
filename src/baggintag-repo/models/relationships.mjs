
function defineRelationships({
  DataSetGroupDataSet,
  DataSetGroup,
  DataSetMedia,
  DataSet,
  MediaTagSet,
  Media,
  TagMappingSet,
  TagMapping,
  TagSet,
  Tag,
}) {
  Tag.belongsTo(TagSet);

  TagSet.belongsTo(TagSet, { foreignKey: 'templateTagSetId' });
  TagSet.belongsToMany(Media, { through: MediaTagSet });
  TagSet.belongsTo(TagMappingSet, { foreignKey: 'sourceTagTemplateSetId' });
  TagSet.belongsTo(TagMappingSet, { foreignKey: 'targetTagTemplateSetId' });

  TagMapping.belongsTo(TagMappingSet);

  MediaTagSet.belongsToMany(DataSet, { through: DataSetMedia });

  DataSet.belongsToMany(DataSetGroup, { through: DataSetGroupDataSet });
}

export default defineRelationships;
