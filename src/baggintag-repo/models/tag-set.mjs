import { DataTypes } from 'sequelize';

function defineTagSet(database) {
  const TagSet = database.define('TagSet', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    tagSetTemplateId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {});
  
  return TagSet;
}

export default defineTagSet;