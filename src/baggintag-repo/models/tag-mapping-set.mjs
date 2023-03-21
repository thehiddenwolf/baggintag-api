import { DataTypes } from 'sequelize';

function defineTagMappingSet(database) {
  const TagMappingSet = database.define('TagMappingSet', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    sourceTagTemplateSetId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    targetTagTemplateSetId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    indexes: [
      {
        fields: ['name'],
      },
      {
        fields: ['dateCreated'],
      },
      {
        fields: ['description'],
        using: 'FULLTEXT',
      },
      {
        fields: ['tags'],
        using: 'FULLTEXT',
      }
    ]
  });

  return TagMappingSet;
}

export default defineTagMappingSet;