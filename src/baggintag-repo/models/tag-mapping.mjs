import { DataTypes } from 'sequelize';

function defineTagMapping(database) {
  const TagMapping = database.define('TagMapping', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    tagMappingSetId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tagSource: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tagMap: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  return TagMapping;
}

export default defineTagMapping;