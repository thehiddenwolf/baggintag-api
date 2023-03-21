import { DataTypes } from 'sequelize';

// Media
// id: String(Guid)
// filename: String
// fileLocator: String (IE: '/images/1234.jpg')
// mediaType: String
// mediaWidth: Number
// mediaHeight: Number
// mediaSource: String - not sure it needs an ID for the image source? will simply be "Upload" or "ImageAction"

function defineMedia(database) {
  const Media = database.define('Media', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileLocator: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    mediaType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mediaSource: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mediaWidth: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mediaHeight: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    indexes: [
      {
        fields: ['mediaSource']
      }
    ]
  });
  return Media;
}

export default defineMedia;