import { DataTypes } from 'sequelize';

function defineDataSetMedia(database) {
  const DataSetMedia = database.define('DataSetMedia', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    dataSetId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mediaTagSetId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  return DataSetMedia;
}


export default defineDataSetMedia;