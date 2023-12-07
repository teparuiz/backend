const router = require("express").Router();

// Controller Imports
const SalesRecordController = require("./controllers/SalesRecordController");

// Middleware Imports
const isAuthenticatedMiddleware = require("./../common/middlewares/IsAuthenticatedMiddleware");
const SchemaValidationMiddleware = require("../common/middlewares/SchemaValidationMiddleware");
const CheckPermissionMiddleware = require("../common/middlewares/CheckPermissionMiddleware");

// JSON Schema Imports for payload verification
const createSalesRecord = require("./schemas/createSalesRecord");
const updateSalesRecord = require("./schemas/updateSalesRecord");
const { roles } = require("../config");

router.get(
  "/",
  [isAuthenticatedMiddleware.check],
  SalesRecordController.getAllSalesRecord
);

router.get(
  "/:salesRecordId",
  [isAuthenticatedMiddleware.check],
  SalesRecordController.getSalesRecordById
);

router.post(
  "/",
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(createSalesRecord),
  ],
  SalesRecordController.createSalesRecord
);

router.patch(
  "/:salesRecordId",
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(updateSalesRecord),
  ],
  SalesRecordController.updateSalesRecord
);

router.delete(
  "/:salesRecordId",
  [isAuthenticatedMiddleware.check, CheckPermissionMiddleware.has(roles.ADMIN)],
  SalesRecordController.deleteSalesRecord
);

module.exports = router;
