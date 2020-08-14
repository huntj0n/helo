require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const app = express();

const{SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const ctrl = require('./controller')

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 48},
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false},
}).then(db => {
    app.set('db', db)
    console.log("I'm sorry Dave, I'm afraid I can't do that.")
})

//ENDPOINTS


app.listen(SERVER_PORT, ()=> console.log(`This mission is too important for me to allow you to jeopardize it. server running on ${SERVER_PORT}`))