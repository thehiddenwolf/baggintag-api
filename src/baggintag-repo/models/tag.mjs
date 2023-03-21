import { DataTypes } from 'sequelize';
// Tag
// id: String(Guid)
// type: String (IE: 'artist', 'description', 'tag')
// value: String
// TagSetId: String
// TagOrder: Number -- 0 indexed

function defineTag(database) {
  const Tag = database.define('Tag', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    tagSetId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tagOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});

  return Tag;
}

export default defineTag;