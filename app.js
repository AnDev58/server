const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session")
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.engine("hbs", require("express-handlebars").engine({
  layoutsDir: __dirname+"/interface/views/layouts",
  defaultLayout: "main",
  extname: "hbs"
}))

app.use(session({
  name: 'main',
  secret: 'chafka',
  resave: false,
  saveUninitialized: true,
  unset: 'destroy'
}))

app.set("view engine", "hbs");
app.set("views", __dirname+"/interface/views")
require("hbs").registerPartials(__dirname + "/interface/views/partials");

app.use("/static", express.static(__dirname+"/public"))

// JS libs
app.use("/lib", express.static(__dirname+"/public/lib"))
app.use("/lib/jquery", express.static(__dirname+"/node_modules/jquery/dist"))

app.use("/users", require("./routes/users"))
app.use("/nojs", require("./routes/nojs"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});