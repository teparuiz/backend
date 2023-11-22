const router = require("express").Router();

const IsAuthenticatedMiddleware = require("../common/middlewares/IsAuthenticatedMiddleware");
//Middleware Imports

//Controller Imports
const CashCutController = require("./controllers/CashCutController");

//JSON Schema Imports for

const { dailyCashCuts } = require("../config");

router.get("/", [IsAuthenticatedMiddleware.check], CashCutController.get);
