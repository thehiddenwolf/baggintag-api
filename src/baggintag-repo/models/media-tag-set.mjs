import { DataTypes } from 'sequelize';

function defineMediaTagSet(database) {
  const MediaTagSet = database.define('MediaTagSet', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    mediaId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tagSetId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    indexes: [
      {
        fields: ['type']
      }
    ]
  });
  
  return MediaTagSet;
}

export default defineMediaTagSet;