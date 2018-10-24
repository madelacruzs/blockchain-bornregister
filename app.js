var express = require("express");
var bodyParser = require("body-parser");
var config = require("./config");
var routes = require("./routes/routes-babies.js");

//Routes Base de Datos
var indexRouter = require('./node-sequelize/routes/index');
var usersRouter = require('./node-sequelize/routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Servicio de blockchain
app.use("/api", routes);

//Servicios de Base de datos 
app.use('/', indexRouter);
app.use('/users', usersRouter);

const PORT = process.env.PORT || config.PORT;

var server = app.listen(PORT, function () {
    console.log("app running on port.", PORT); 
}); 
