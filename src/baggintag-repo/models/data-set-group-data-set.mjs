import { DataTypes } from 'sequelize';

function defineDataSetGroupDataSet(database) {
  const DataSetGroupDataSet = database.define('DataSetGroupDataSet', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    dataSetGroupId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dataSetId: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});

  return DataSetGroupDataSet;
}


export default defineDataSetGroupDataSet;