const express = require('express')
const mongoose = require('mongoose')
const expenseSchema = require('./Models/expense')
const bodyParser = require('body-parser')

const expenseModel = mongoose.model('Expense', expenseSchema)

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

const mongoDbAccess = "mongodb+srv://Scotty237:nctKBGdie9xDXYwA@cluster0.ppogrb1.mongodb.net/"

mongoose.connect(mongoDbAccess, { useNewUrlParser: true}).then(() => console.log("connected to the database")).catch((e) => console.log(e))

const port = 3000

app.listen(port, () => {
    console.log("Hello, you are listening to port" + port)
})

app.get('/', (req, res) => console.log(res.send("Welcome to our web server")))