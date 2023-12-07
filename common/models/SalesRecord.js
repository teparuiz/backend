const { DataTypes } = require("sequelize");
const { productPriceUnits } = require("../../config");

const SalesRecordModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  concept: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("salesrecord", SalesRecordModel);
    // sequelize
    //   .sync({ force: true }) // Esto borrará y recreará la tabla, ¡ten cuidado en entornos de producción!
    //   .then(async () => {
    //     // Crear un registro
    //     const newRecord = await SalesRecordModel.create({
    //       date: "2023-12-07",
    //       concept: "Venta de producto",
    //       amount: 100,
    //       payMethod: "Efectivo",
    //     });

    //     console.log("Registro creado:", newRecord.toJSON());
    //   })
    //   .catch((err) => {
    //     console.error("Error al sincronizar y crear el registro:", err);
    //   });
  },

  createSalesRecord: (salesRecord) => {
    return this.model.create(salesRecord);
  },

  findSalesRecord: (query) => {
    return this.model.findOne({
      where: query,
    });
  },

  updateSalesRecord: (query, updatedValue) => {
    return this.model.update(updatedValue, {
      where: query,
    });
  },

  findAllSalesRecords: (query) => {
    return this.model.findAll({
      where: query,
    });
  },

  deleteSalesRecord: (query) => {
    return this.model.destroy({
      where: query,
    });
  },
};
