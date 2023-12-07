const Express = require("express");
const app = Express();
const cors = require("cors");
const morgan = require("morgan");
const { Sequelize } = require("sequelize");

const { port } = require("./config");
const PORT = process.env.PORT || port;

// Express Routes Import
const AuthorizationRoutes = require("./authorization/routes");
const UserRoutes = require("./users/routes");
const ProductRoutes = require("./products/routes");
const CashCutRoutes = require("./cashcut/routes");
const SalesRecordRoutes = require("./salesrecord/routes");

// Sequelize model imports
const UserModel = require("./common/models/User");
const ProductModel = require("./common/models/Product");
const CashCutModel = require("./common/models/CashCut");
const SalesRecordModel = require("./common/models/SalesRecord");

app.use(morgan("tiny"));
app.use(cors());

// Middleware that parses the body payloads as JSON to be consumed next set
// of middlewares and controllers.
app.use(Express.json());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./storage/data.db", // Path to the file that will store the SQLite DB.
});

// Initialising the Model on sequelize
UserModel.initialise(sequelize);
ProductModel.initialise(sequelize);
CashCutModel.initialise(sequelize);
SalesRecordModel.initialise(sequelize);

// Syncing the models that are defined on sequelize with the tables that alredy exists
// in the database. It creates models as tables that do not exist in the DB.
sequelize
  .sync()
  .then(() => {
    return sequelize.getQueryInterface().showAllTables(); // Verificar existencia de tablas
  })
  .then(() => {
    console.log("Sequelize Initialised!!");

    // Attaching the Authentication and User Routes to the app.
    app.use("/", AuthorizationRoutes);
    app.use("/user", UserRoutes);
    app.use("/product", ProductRoutes);
    app.use("/cashcut", CashCutRoutes);
    app.use("/salesrecord", SalesRecordRoutes);

    app.listen(PORT, () => {
      console.log("Server Listening on PORT:", port);
    });
  })
  .catch((err) => {
    console.error("Sequelize Initialisation threw an error:", err);
  });


  // sequelize
  // .sync()
  // .then(() => {
  //   return sequelize.getQueryInterface().showAllTables(); // Verificar existencia de tablas
  // })
  // .then((tables) => {
  //   if (tables.includes('SalesRecordModel')) {
  //     return sequelize.SalesRecordModel.drop(); // Eliminar la tabla si existe
  //   } else {
  //     console.log('SalesRecordModel table does not exist.');
  //     // Lógica para continuar la inicialización de la app...
  //   }
  // })
  // .then(() => {
  //   // Resto del código para inicializar la aplicación
  // })
  // .catch((err) => {
  //   console.error("Sequelize Initialisation threw an error:", err);
  // });
