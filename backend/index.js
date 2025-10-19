let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
// Express Route
const studentRoute = require('../backend/routes/student.route')
// Connecting mongoDB Database
mongoose.connect('mongodb://127.0.0.1:27017/test').then((x) => {
 console.log('Connected to database')
 })
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/students', studentRoute)
// Listening to port
app.listen(4000, () => {
 console.log('Connected to port')
})

