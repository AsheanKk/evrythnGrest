const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/req_manager')

//ste the statics
app.use(bodyParser.json())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use("/public", express.static("public"));



// set view engine
app.set("view engine", "ejs");
app.set("views", "./views")

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)


//Database
const db = require('./config/db_config.js')


//Test db
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error while connecting to the databes :' + err))

//app.get('/', (req,res) => res.render('index'));



app.use('/', routes);






const port = process.env.port || 3000;
app.listen(port, console.log('Server has started on port ' + port.toString()));