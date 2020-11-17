const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'view'));

const connection = require("./services/database");
connection.connect();

const routes = require("./routes/todoroutes");
app.use(routes);

app.listen(PORT, console.log(`Server running on port:${PORT}`))