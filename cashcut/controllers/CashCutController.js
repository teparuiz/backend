const CashCutModel = require("../../../common/models/CashCut");

module.exports = {
  getCashCut: (req, res) => {
    const {
      user: { userId },
    } = req;

    CashCutModel.findCasCut({ id: userId })
      .then((user) => {
        return res.status(200).json({
          status: true,
          data: user.toJSON(),
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
