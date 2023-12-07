const SalesRecordModel = require("../../common/models/SalesRecord");

module.exports = {
  getAllSalesRecord: (req, res) => {
    const { query: filters } = req;

    SalesRecordModel.findAllSalesRecords(filters)
      .then((salesRecord) => {
        return res.status(200).json({
          status: true,
          data: salesRecord,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  getSalesRecordById: (req, res) => {
    const {
      params: { salesRecordId },
    } = req;

    SalesRecordModel.findSalesRecord({ id: salesRecordId })
      .then((salesRecord) => {
        return res.status(200).json({
          status: true,
          data: salesRecord.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  createSalesRecord: (req, res) => {
    const { body } = req;

    SalesRecordModel.createSalesRecord(body)
      .then((salesRecord) => {
        return res.status(200).json({
          status: true,
          data: salesRecord.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  updateSalesRecord: (req, res) => {
    const {
      params: { salesRecordId },
      body: payload,
    } = req;

    // IF the payload does not have any keys,
    // THEN we can return an error, as nothing can be updated
    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message:
            "El cuerpo esta vació, por lo tanto no se puede actualizar el registro de ventas.",
        },
      });
    }

    SalesRecordModel.updateSalesRecord({ id: salesRecordId }, payload)
      .then(() => {
        return SalesRecordModel.findSalesRecord({ id: salesRecordId });
      })
      .then((salesRecord) => {
        return res.status(200).json({
          status: true,
          data: salesRecord.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  deleteSalesRecord: (req, res) => {
    const {
      params: { salesRecordId },
    } = req;

    SalesRecordModel.deleteSalesRecord({ id: salesRecordId })
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfProductsDeleted: numberOfEntriesDeleted,
          },
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },
};
