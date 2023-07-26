const express = require('express')
const mongoose = require('mongoose')
const expenseSchema = require('./Models/expense')
const bodyParser = require('body-parser')
const cors = require('cors');

const expenseModel = mongoose.model('Expense', expenseSchema)

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

const mongoDbAccess = "mongodb+srv://Scotty237:nctKBGdie9xDXYwA@cluster0.ppogrb1.mongodb.net/"

mongoose.connect(mongoDbAccess, { useNewUrlParser: true}).then(() => console.log("connected to the database")).catch((e) => console.log(e))

const port = 3001

app.listen(port, () => {
    console.log("Hello, you are listening to port" + port)
})

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });
// a. GET /expenses to retrieve all data from the db

app.get('/expenses', async (req, res) => {
    let data = await expenseModel.find()
    res.send(data)
})

// b. POST /expenses to post an expense

app.post('/expenses', async (req, res) => {
    const newExpense = new expenseModel({
        name: "Transport fee",
        amount: 1000,
        date: "April 1st",
        invoice: "Transport Payment"

    }
    )

    const data = await newExpense.save()
    res.send(data) 
})

// c PUT /expenses/:id to update an id

app.put('/expenses/:id', async (req, res) => {
    const id = req.params.id

    const newExpense = new expenseModel({
        name: "Updated Transport",
        amount: 1000,
        date: "April 1st",
        invoice: "Transport Payment"
    }
    )


    let data = await expenseModel.findByIdAndUpdate(id, {$set: newExpense}, {new:true})

    res.send(data)
})


// d DELETE /expenses/:id to delete an id

app.delete('/expenses/:id', async (req, res) => {
    const id = req.params.id

   

    let data = await expenseModel.findByIdAndDelete(id)

    res.send(data)

})

// d Get /expenses/:id to get an id

app.get('/expenses/:id', async (req, res) => {
    const id = req.params.id

   

    let data = await expenseModel.findById(id)

    res.send(data)
})
