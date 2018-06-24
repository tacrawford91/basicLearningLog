module.exports = function(sequelize, DataTypes) {
    var Entry = sequelize.define("Entry", {
      day: DataTypes.STRING,
      skill: DataTypes.STRING,
      summary: DataTypes.STRING,
      description: DataTypes.STRING,
      imageURL: DataTypes.STRING,
      language: DataTypes.STRING
    });
    return Entry;
  };