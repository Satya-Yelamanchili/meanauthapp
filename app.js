const express = require('express');
const path = require('path');
const bodyparcer = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const app = express();
const users = require('./routes/users');
const port = 4300;

mongoose.Promise = global.Promise;
mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
    console.log('Connected to database ' + config.database);
});

//Cors Middleware
app.use(cors());

//Body Parser Middleware 
app.use(bodyparcer.json());
app.use('/users', users);

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Set static Folder
app.use(express.static(path.join(__dirname,'public')));

//Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint.');
});

//Start Server
app.listen(port, ()=> {
    console.log('Server started on port:' + port);
});

//nodemon for running the server and see for changes
