require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const db = require('./models/index')
const app = express()

db.sequelize.authenticate()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server has been running on port ${process.env.PORT}`)
        })
        console.log('Connection db ok')
    } )
    .catch((err) => console.log(err))

if (process.env.NODE_ENV === 'development') {
    //db.sequelize.sync({ after: {drop: false}}) EDIT PAS DELETE
    db.sequelize.sync({ force: true })
}
