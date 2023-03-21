import { DataTypes } from 'sequelize';
function defineDataSet(database) {
  const DataSet = database.define('DataSet', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
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
        fields: ['description'],
        using: 'FULLTEXT',
      },
      {
        fields: ['tags'],
        using: 'FULLTEXT',
      }
    ]
  });
  return DataSet;
}

export default defineDataSet;