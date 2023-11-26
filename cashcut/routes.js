const router = require("express").Router();

// Controller Imports
const CashCutController = require("./controllers/CashCutController");

// Middleware Imports
const isAuthenticatedMiddleware = require("./../common/middlewares/IsAuthenticatedMiddleware");
const SchemaValidationMiddleware = require("../common/middlewares/SchemaValidationMiddleware");
const CheckPermissionMiddleware = require("../common/middlewares/CheckPermissionMiddleware");

// JSON Schema Imports for payload verification
const createCashCutPayload = require("./schemas/createCashCutPayload");
const updateCashCutPayload = require("./schemas/updateCashCutPayload");
const { roles } = require("../config");

router.get(
  "/",
  [isAuthenticatedMiddleware.check],
  CashCutController.getAllCashCut
);

router.get(
  "/:cashCutId",
  [isAuthenticatedMiddleware.check],
  CashCutController.getCashCutById
);

router.post(
  "/",
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(createCashCutPayload),
  ],
  CashCutController.createCashCut
);

router.patch(
  "/:cashCutId",
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(updateCashCutPayload),
  ],
  CashCutController.updateCashCut
);

router.delete(
  "/:cashCutId",
  [isAuthenticatedMiddleware.check, CheckPermissionMiddleware.has(roles.ADMIN)],
  CashCutController.deleteCashCut
);

module.exports = router;
