const { DataTypes } = require("sequelize");
const { dailyCashCuts } = require("../../config");
const { query } = require("express");

const CashCutModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.TEXT,
    allowNull: false,

  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dailyExpenses: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sales: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cashBox: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("cashcut", CashCutModel);
  },

  createCashCut: (cashcut) => {
    return this.model.create(cashcut);
  },

  findCashCut: (query) => {
    return this.model.findOne({
      where: query,
    });
  },

  updateCashCut: (query, updatedValue) => {
    return this.model.update(updatedValue, {
      where: query,
    });
  },

  findAllCashCut: (query) => {
    return this.model.findAll({
      where: query,
    });
  },

  deleteCashCut: (query) => {
    return this.model.destroy({
      where: query,
    });
  },
};
