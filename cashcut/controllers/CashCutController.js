const CashCutModel = require("../../common/models/CashCut");
const { v4: uuidv4} = require('uuid');

module.exports = {
  getAllCashCut: (req, res) => {
    const { query: filters } = req;

    CashCutModel.findAllCashCut(filters)
      .then((cashCut) => {
        return res.status(200).json({
          status: true,
          data: cashCut,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  getCashCutById: (req, res) => {
    const {
      params: { cashCutId },
    } = req;

    CashCutModel.findCashCut({
      id: cashCutId,
    })
      .then((cashCut) => {
        return res.status(200).json({
          status: true,
          data: cashCut.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  createCashCut: (req, res) => {
    const { body } = req;

    CashCutModel.createCashCut(body)
      .then((cashCut) => {
        return res.status(200).json({
          status: true,
          data: cashCut.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  updateCashCut: (req, res) => {
    const {
      params: { cashCutId },
      body: payload,
    } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: "No hay nada, no se puede actualizar el producto",
        },
      });
    }

    CashCutModel.updateCashCut(
      {
        id: cashCutId,
      },
      payload
    )
      .then(() => {
        return CashCutModel.findCashCut({
          id: cashCutId,
        });
      })
      .then((cashCut) => {
        return res.status(200).json({
          status: true,
          data: cashCut.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  deleteCashCut: (req, res) => {
    const {
      params: { cashCutId },
    } = req;

    CashCutModel.deleteCashCut({
      id: cashCutId,
    })
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfCashCutDeleted: numberOfEntriesDeleted,
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
