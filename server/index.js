const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const {mongoose} = require("./database");
//SETTINGS
// (process.env.PORT || 3000) si el servicio de la nude te da un puerto usa ese, si no se
// usa el que yo te doy
app.set("port", process.env.PORT || 3000 )

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin: "http://localhost:4200"}));

//ROUTERS
app.use("/api/employees",require("./routers/employee.routers"));

//STARING THE SERVER
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`)
});
