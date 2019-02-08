require('dotenv').config();
const express = require('express');
const sessions = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller')

const app = express()
const {DB_CONNECTION, SESSION_SECRET, SERVER_PORT} = process.env

massive(DB_CONNECTION)
.then( db => {app.set('db', db)})
.catch((err) => console.log(err))

//middleware
app.use(bodyParser.json())
app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false, 
}))

//endpoints
app.post(`/auth/register`, ctrl.register)
app.post(`/auth/login`, ctrl.login)


//server port listening 
app.listen(SERVER_PORT , () => console.log(`Firing up at port: ${SERVER_PORT}`))
