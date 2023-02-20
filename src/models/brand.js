"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Brand.hasOne(models.Product, { foreignKey: "brandId", as: "brands" });
    }
  }
  Brand.init(
    {
      name: DataTypes.STRING,   
      slug: DataTypes.STRING,
      images: DataTypes.JSON,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Brand",
    }
  );
  return Brand;
};
